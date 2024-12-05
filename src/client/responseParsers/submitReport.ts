import type { ReportResponse } from '../../types';
import { parseXmlResponse } from '../../utils/xmlResponseParser';

/**
 * Parses the XML response from the CyberTipline Submit Report endpoint into a strongly typed object
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
export const parseResponse = (xmlData: string): ReportResponse => {
  return parseXmlResponse<ReportResponse>(xmlData, {
    rootKey: 'reportResponse',
    rules: [
      { key: 'responseCode', type: 'number', required: true },
      { key: 'responseDescription', type: 'string', required: true },
      { key: 'reportId', type: 'number', required: true },
    ],
  });
};
