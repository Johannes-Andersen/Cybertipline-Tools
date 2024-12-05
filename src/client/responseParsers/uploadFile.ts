import type { UploadFileResponse } from '../../types';
import { parseXmlResponse } from '../../utils/xmlResponseParser';

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
 *      <fileId>b0754af766b426f2928a02c651ed4b99</fileId>
 *      <hash>fafa5efeaf3cbe3b23b2748d13e629a1</hash>
 *  </reportResponse>
 * ```
 *
 * @param xmlData - Raw XML response string from the API
 * @returns Parsed ReportResponse object with response code, description, and report ID
 * @throws Error if the XML is malformed or missing required properties
 */
export const parseResponse = (xmlData: string): UploadFileResponse => {
  return parseXmlResponse<UploadFileResponse>(xmlData, {
    rootKey: 'reportResponse',
    rules: [
      { key: 'responseCode', type: 'number', required: true },
      { key: 'responseDescription', type: 'string', required: true },
      { key: 'reportId', type: 'number', required: true },
      { key: 'fileId', type: 'string', required: true },
      { key: 'hash', type: 'string', required: false },
    ],
  });
};
