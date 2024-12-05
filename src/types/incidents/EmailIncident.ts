import type { Email } from '../common/Email.js';

/**
 * Details for an incident that occurred over email.
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#email-incident
 */
export interface EmailIncident {
  /** An email address associated with the incident. */
  emailAddress?: Array<Email>;
  /** The headers, subject, and content of the communication. */
  content?: string;
  /** Additional information about the email incident not covered by any other section. */
  additionalInfo?: string;
}
