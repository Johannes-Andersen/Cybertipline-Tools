import type { Address } from '../common/Address.js';

/**
 * Details for an incident that does not involve an online or computer component or a cell phone
 * (e.g., face-to-face contact, potentially illegal hard copy or printed materials).
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#non-internet-incident
 */
export interface NonInternetIncident {
  /** The location associated with the incident. */
  locationName?: string;
  /** The address of the incident. */
  incidentAddress?: Array<Address>;
  /** Additional information about the incident not covered by any other section. */
  additionalInfo?: string;
}
