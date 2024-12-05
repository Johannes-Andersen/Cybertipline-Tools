/**
 * Details for an incident that occurred on a web page.
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#web-page-incident
 */
export interface WebPageIncident {
  /** An actual URL where the reported incident occurred. */
  url?: Array<string>;
  /** Additional information related to the web page event. */
  additionalInfo?: string;
  /** Whether the reported URL is hosted on another company’s server and the reporter has no further
   * information on this incident and is providing it to NCMEC for informational purposes.
   */
  thirdPartyHostedContent?: boolean;
}
