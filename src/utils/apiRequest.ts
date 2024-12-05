/**
 * Generic API request handler with authentication and status code handling
 */
export async function makeApiRequest<T>(
  url: string,
  auth: string,
  options: RequestInit = {},
): Promise<{ data: T; requestId: string }> {
  console.log({ auth, url });
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Basic ${auth}`,
      ...options.headers,
    },
  });

  const requestId = response.headers.get('Request-ID') || 'unknown';

  if (!response.ok) {
    let errorMessage = `Request failed with http status ${response.status}`;

    try {
      // TODO: Add XML parsing logic
      const errorResponse = await response.text();
      errorMessage += ` (${errorResponse})`;
    } catch (_e) {
      // ignore errors when parsing the error message
    }

    throw new Error(`${errorMessage} (Request-ID: ${requestId})`);
  }

  // TODO: Add XML parsing logic
  // const text = await response.text();
  // For now return mock response
  const mockResponse = {
    responseCode: 0,
  } as T;

  return {
    data: mockResponse,
    requestId,
  };
}
