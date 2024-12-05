import type { Phone } from '../common/Phone.js';

/**
 * Details for an incident that occurred when the primary method of communication between
 * the child and/or reported person or user was through a cell phone.
 * This can include phone conversations, text messages, or images sent via a cell phone.
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#cellphone-incident
 */
export interface CellPhoneIncident {
  /** The cell phone number associated with the incident. */
  phoneNumber?: Phone;
  /** The latitude associated with the incident. */
  latitude?: number;
  /** The longitude associated with the incident. */
  longitude?: number;
  /** Additional information about the cell phone incident not covered by any other section. */
  additionalInfo?: string;
}
