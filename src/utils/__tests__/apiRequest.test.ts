import { beforeEach, describe, expect, it, vi } from 'vitest';
import { makeApiRequest } from '../apiRequest';

// Mock the global fetch function
const mockFetch = vi.fn();
global.fetch = mockFetch;

// Reset mocks before each test
beforeEach(() => {
  mockFetch.mockReset();
});

describe('makeApiRequest', () => {
  const mockUrl = 'https://api.example.com/endpoint';
  const mockAuth = 'base64-encoded-auth';
  const mockParser = {
    response: vi.fn(),
    error: vi.fn(),
  };

  it('should make a successful request with correct headers', async () => {
    const mockResponseData = { success: true };
    const mockXmlResponse = '<response><success>true</success></response>';
    const mockRequestId = '123-456';

    // Setup mock response
    mockFetch.mockResolvedValueOnce({
      ok: true,
      headers: new Headers({ 'Request-ID': mockRequestId }),
      text: () => Promise.resolve(mockXmlResponse),
    });

    mockParser.response.mockReturnValueOnce(mockResponseData);

    const result = await makeApiRequest(mockUrl, mockAuth, mockParser);

    // Verify fetch was called with correct parameters
    expect(mockFetch).toHaveBeenCalledWith(mockUrl, {
      headers: {
        Authorization: `Basic ${mockAuth}`,
      },
    });

    // Verify parser was called with XML response
    expect(mockParser.response).toHaveBeenCalledWith(mockXmlResponse);

    // Verify the returned data
    expect(result).toEqual({
      data: mockResponseData,
      requestId: mockRequestId,
    });
  });

  it('should handle missing Request-ID header', async () => {
    const mockResponseData = { success: true };
    const mockXmlResponse = '<response><success>true</success></response>';

    mockFetch.mockResolvedValueOnce({
      ok: true,
      headers: new Headers({}),
      text: () => Promise.resolve(mockXmlResponse),
    });

    mockParser.response.mockReturnValueOnce(mockResponseData);

    const result = await makeApiRequest(mockUrl, mockAuth, mockParser);

    expect(result.requestId).toBe('unknown');
  });

  it('should merge custom fetch options with defaults', async () => {
    const mockResponseData = { success: true };
    const mockXmlResponse = '<response><success>true</success></response>';
    const customOptions: RequestInit = {
      method: 'POST',
      body: 'test-body',
      headers: {
        'Content-Type': 'application/xml',
      },
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      headers: new Headers({}),
      text: () => Promise.resolve(mockXmlResponse),
    });

    mockParser.response.mockReturnValueOnce(mockResponseData);

    await makeApiRequest(mockUrl, mockAuth, mockParser, customOptions);

    expect(mockFetch).toHaveBeenCalledWith(mockUrl, {
      method: 'POST',
      body: 'test-body',
      headers: {
        'Content-Type': 'application/xml',
        Authorization: `Basic ${mockAuth}`,
      },
    });
  });

  it('should handle error responses with parsed error data', async () => {
    const mockErrorXml =
      '<error><code>1000</code><description>Server Error</description></error>';
    const mockRequestId = 'error-123';

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      headers: new Headers({ 'Request-ID': mockRequestId }),
      text: () => Promise.resolve(mockErrorXml),
    });

    mockParser.error.mockReturnValueOnce({
      responseCode: 1000,
      responseDescription: 'Server Error',
    });

    await expect(makeApiRequest(mockUrl, mockAuth, mockParser)).rejects.toThrow(
      `Request failed with http status 500 - ServerError (Request-ID: ${mockRequestId})`,
    );

    expect(mockParser.error).toHaveBeenCalledWith(mockErrorXml);
  });

  it('should handle error responses with unparseable error data', async () => {
    const mockRequestId = 'error-456';

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      headers: new Headers({ 'Request-ID': mockRequestId }),
      text: () => Promise.resolve('Invalid XML'),
    });

    mockParser.error.mockImplementationOnce(() => {
      throw new Error('Failed to parse error');
    });

    await expect(makeApiRequest(mockUrl, mockAuth, mockParser)).rejects.toThrow(
      `Request failed with http status 500 (Request-ID: ${mockRequestId})`,
    );
  });

  it('should handle network errors', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    await expect(makeApiRequest(mockUrl, mockAuth, mockParser)).rejects.toThrow(
      'Network error',
    );
  });

  it('should handle error responses with known response codes', async () => {
    const mockErrorXml =
      '<error><code>1000</code><description>Server Error</description></error>';
    const mockRequestId = 'error-789';

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      headers: new Headers({ 'Request-ID': mockRequestId }),
      text: () => Promise.resolve(mockErrorXml),
    });

    mockParser.error.mockReturnValueOnce({
      responseCode: 1000,
      responseDescription: 'Server Error',
    });

    await expect(makeApiRequest(mockUrl, mockAuth, mockParser)).rejects.toThrow(
      `Request failed with http status 500 - ServerError (Request-ID: ${mockRequestId})`,
    );
  });
});
