import type { GetStatusResponse } from '../../types';
import { parseXmlResponse } from '../../utils/xmlResponseParser';

/**
 * Parses the XML response from the CyberTipline Status endpoint into a strongly typed object
 *
 * The XML response follows this structure:
 * ```xml
 *   <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 *   <reportResponse>
 *       <responseCode>0</responseCode>
 *       <responseDescription>
 *         Remote User : {username}, Remote Ip : {ip address}
 *       </responseDescription>
 *   </reportResponse>
 * ```
 *
 * @param xmlData - Raw XML response string from the API
 * @returns Parsed GetStatusResponse object with response code and description
 * @throws Error if the XML is malformed or missing required properties
 */
export const parseResponseError = (xmlData: string): GetStatusResponse => {
  return parseXmlResponse<GetStatusResponse>(xmlData, {
    rootKey: 'reportResponse',
    rules: [
      { key: 'responseCode', type: 'number', required: true },
      { key: 'responseDescription', type: 'string', required: true },
    ],
  });
};
