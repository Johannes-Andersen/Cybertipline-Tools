import { describe, expect, it } from 'vitest';
import {
  ensureDesiredReportState,
  ensureSuccessResponse,
  resolveResponseCode,
} from '../responseCode';

// Mock the ResponseCode enum since we can't import it directly in the test environment
const MockResponseCode = {
  Success: 0,
  ServerError: 1000,
  ReportAlreadyFinished: 5102,
  ReportAlreadyRetracted: 5101,
} as const;

describe('resolveResponseCode', () => {
  it('should resolve success code correctly', () => {
    const result = resolveResponseCode(MockResponseCode.Success);
    expect(result).toEqual({
      message: 'Success',
      httpStatus: 200,
    });
  });

  it('should resolve error codes correctly', () => {
    const result = resolveResponseCode(MockResponseCode.ServerError);
    expect(result).toEqual({
      message: 'Server error',
      httpStatus: 500,
    });
  });

  it('should handle unknown response codes', () => {
    const result = resolveResponseCode(99999);
    expect(result).toEqual({
      message: 'Unknown error',
      httpStatus: 500,
    });
  });
});

describe('ensureSuccessResponse', () => {
  it('should not throw for success response', () => {
    expect(() => {
      ensureSuccessResponse(MockResponseCode.Success);
    }).not.toThrow();
  });

  it('should throw for non-success response', () => {
    expect(() => {
      ensureSuccessResponse(MockResponseCode.ServerError);
    }).toThrow('Server error');
  });

  it('should throw with correct message for unknown code', () => {
    expect(() => {
      ensureSuccessResponse(99999);
    }).toThrow('Unknown error');
  });
});

describe('ensureDesiredReportState', () => {
  it('should not throw for success response', () => {
    expect(() => {
      ensureDesiredReportState(MockResponseCode.Success);
    }).not.toThrow();
  });

  it('should not throw for already finished report', () => {
    expect(() => {
      ensureDesiredReportState(MockResponseCode.ReportAlreadyFinished);
    }).not.toThrow();
  });

  it('should not throw for already retracted report', () => {
    expect(() => {
      ensureDesiredReportState(MockResponseCode.ReportAlreadyRetracted);
    }).not.toThrow();
  });

  it('should throw for other error responses', () => {
    expect(() => {
      ensureDesiredReportState(MockResponseCode.ServerError);
    }).toThrow('Server error');
  });

  it('should throw with correct message for unknown code', () => {
    expect(() => {
      ensureDesiredReportState(99999);
    }).toThrow('Unknown error');
  });
});
