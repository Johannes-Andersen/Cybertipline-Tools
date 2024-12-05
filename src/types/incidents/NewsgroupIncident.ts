import type { Email } from '../common/Email.js';

/**
 * Details for an incident that occurred in a newsgroup.
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#newsgroup-incident
 */
export interface NewsgroupIncident {
  /** The newsgroup name. */
  name?: string;
  /** An email address associated with the incident. */
  emailAddress?: Array<Email>;
  /** The headers, subject, and content of the communication. */
  content?: string;
  /** Additional information about the newsgroup incident not covered by any other section. */
  additionalInfo?: string;
}
