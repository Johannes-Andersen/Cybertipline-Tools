import type { FinishReportResponse } from '../../types';
import { parseXmlResponse } from '../../utils/xmlResponseParser';

/**
 * Parses the XML response from the CyberTipline Finish Report endpoint into a strongly typed object
 *
 * The XML response follows this structure:
 * ```xml
 *   <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 *   <reportDoneResponse>
 *       <responseCode>0</responseCode>
 *       <reportId>4564654</reportId>
 *       <files>
 *           <fileId>b0754af766b426f2928a02c651ed4b99</fileId>
 *       </files>
 *   </reportDoneResponse>
 * ```
 *
 * @param xmlData - Raw XML response string from the API
 * @returns Parsed reportDoneResponse object with response code, description, and report ID
 * @throws Error if the XML is malformed or missing required properties
 */
export const parseResponse = (xmlData: string): FinishReportResponse => {
  return parseXmlResponse<FinishReportResponse>(xmlData, {
    rootKey: 'reportDoneResponse',
    rules: [
      { key: 'responseCode', type: 'number', required: true },
      { key: 'reportId', type: 'number', required: true },
    ],
  });
};
