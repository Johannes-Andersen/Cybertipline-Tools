import type { DeviceId } from '../common/DeviceId.js';
import type { EstimatedLocation } from '../common/EstimatedLocation.js';
import type { IpCapture } from '../common/IpCapture.js';
import type { Person } from '../common/Person.js';

/**
 * A child victim involved in the incident.
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#child-victim
 */
export interface Victim {
  /** Information about the child victim involved in the incident. */
  victimPerson: Person;
  /** The unique ID of the child victim in the reporter’s system. */
  espIdentifier?: string;
  /** The name of the reporter’s product or service that was used by the child victim during the incident. */
  espService?: string;
  /** The screen name of the child victim. */
  screenName?: string;
  /** A display name, other than a screen name or a username, for the child victim. */
  displayName?: Array<string>;
  /** An identifying URL for the child victim. */
  profileUrl?: Array<string>;
  /** An IP address used by the child victim. */
  ipCaptureEvent?: Array<IpCapture>;
  /** An ID for a device used by the child victim. */
  deviceId?: Array<DeviceId>;
  /** The school name of the child victim. */
  schoolName?: string;
  /** A report ID for a prior CyberTipline report on this child victim. */
  priorCTReports?: Array<number>;
  /** The reporter’s estimated location for the child victim. */
  estimatedLocation?: EstimatedLocation;
  /** Additional information about this child victim not covered by any other section. */
  additionalInfo?: string;
}
