import type { DeviceId } from '../common/DeviceId.js';
import type { EstimatedLocation } from '../common/EstimatedLocation.js';
import type { IpCapture } from '../common/IpCapture.js';
import type { Person } from '../common/Person.js';

/**
 * The intended recipient involved in the incident.
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#intended-recipient
 */
export interface IntendedRecipient {
  /** Information about the intended recipient in the incident. */
  intendedRecipientPerson?: Person;
  /** The unique ID of the intended recipient in the reporter’s system. */
  espIdentifier?: string;
  /** The name of the reporter’s product or service that was used by the intended recipient during the incident. */
  espService?: string;
  /** The screen name of the intended recipient. */
  screenName?: string;
  /** A display name, other than a screen name or a username, for the intended recipient. */
  displayName?: Array<string>;
  /** An identifying URL for the intended recipient. */
  profileUrl?: Array<string>;
  /** An IP address used by the intended recipient. */
  ipCaptureEvent?: Array<IpCapture>;
  /** An ID for a device used by the intended recipient. */
  deviceId?: Array<DeviceId>;
  /** A report ID for a prior CyberTipline report on this intended recipient. */
  priorCTReports?: Array<number>;
  /** Unique group identifiers (e.g., group name, group ID)
   * if the reporter believes the intended recipient is engaged in an online group related to child sexual exploitation.
   */
  groupIdentifier?: string;
  /** Whether the account was temporarily disabled at any point. */
  accountTemporarilyDisabled?:
    | boolean
    | {
        disabledDate: Date;
        reenabledDate?: Date;
      };
  /** Whether the account was permanently disabled. */
  accountPermanentlyDisabled?:
    | boolean
    | {
        disabledDate: Date;
      };
  /** The reporter’s estimated location for the intended recipient. */
  estimatedLocation?: EstimatedLocation;
  /** Additional information about this intended recipient not covered by any other section. */
  additionalInfo?: string;
}
