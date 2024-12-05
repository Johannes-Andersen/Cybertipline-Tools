import { XMLParser } from 'fast-xml-parser';
import type { CancelReportResponse } from '../../types';

const parser = new XMLParser();

/**
 * Parses the XML response from the CyberTipline Upload File endpoint into a strongly typed object
 *
 * The XML response follows this structure:
 * ```xml
 *  <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 *  <reportResponse>
 *      <responseCode>0</responseCode>
 *      <responseDescription>Success</responseDescription>
 *      <reportId>4564654</reportId>
 *  </reportResponse>
 * ```
 *
 * @param xmlData - Raw XML response string from the API
 * @returns Parsed ReportResponse object with response code, description, and report ID
 * @throws Error if the XML is malformed or missing required properties
 */
export const parseResponse = (xmlData: string): CancelReportResponse => {
  const json = parser.parse(xmlData) as unknown;

  // Validate root is an object
  if (typeof json !== 'object' || json === null) {
    throw new Error(`XML response must be an object, got: ${typeof json}`);
  }

  // Validate reportResponse wrapper exists
  if (!('reportResponse' in json)) {
    throw new Error('XML response missing required "reportResponse" property');
  }

  // Validate reportResponse is an object
  if (typeof json.reportResponse !== 'object' || json.reportResponse === null) {
    throw new Error(
      `XML "reportResponse" must be an object, got: ${typeof json.reportResponse}`,
    );
  }

  const response = json.reportResponse;

  // Validate responseCode exists
  if (!('responseCode' in response)) {
    throw new Error('Response missing required "responseCode" property');
  }

  // Validate responseCode is a number
  if (typeof response.responseCode !== 'number') {
    throw new Error(
      `Response "responseCode" must be a number, got: ${typeof response.responseCode}`,
    );
  }

  // Validate responseDescription exists
  if (!('responseDescription' in response)) {
    throw new Error('Response missing required "responseDescription" property');
  }

  // Validate responseDescription is a string
  if (typeof response.responseDescription !== 'string') {
    throw new Error(
      `Response "responseDescription" must be a string, got: ${typeof response.responseDescription}`,
    );
  }

  // Validate reportId exists
  if (!('reportId' in response)) {
    throw new Error('Response missing required "reportId" property');
  }

  // Validate reportId is a number
  if (typeof response.reportId !== 'number') {
    throw new Error(
      `Response "reportId" must be a number, got: ${typeof response.reportId}`,
    );
  }

  // Return typed response object
  return {
    responseCode: response.responseCode,
    responseDescription: response.responseDescription,
    reportId: response.reportId,
  };
};
