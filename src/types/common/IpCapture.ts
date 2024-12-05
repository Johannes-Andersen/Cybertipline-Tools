export enum IPEventName {
  Login = 'Login',
  Registration = 'Registration',
  Purchase = 'Purchase',
  Upload = 'Upload',
  Other = 'Other',
  Unknown = 'Unknown',
}

/**
 * A capture of an IP address. For example, the IP address of the computer a user used
 * to upload a csam picture and the time the upload happened.
 */
export interface IpCapture {
  /** The IP address from which the event occurred. */
  ipAddress: string;
  /** The type of event from which the IP address was captured. */
  eventName?: IPEventName;
  /** The date and time the IP address was captured. */
  dateTime?: Date;
  /** Whether the reporter has reason to believe this IP address is a proxy. */
  possibleProxy?: boolean;
  /** The port number of the IP address. */
  port?: number;
}
