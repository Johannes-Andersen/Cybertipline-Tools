export enum DeviceEventName {
  Login = 'Login',
  Registration = 'Registration',
  Purchase = 'Purchase',
  Upload = 'Upload',
  Other = 'Other',
  Unknown = 'Unknown',
}

export enum DeviceIdType {
  IMEI = 'IMEI',
  ICCID = 'ICCID',
  SSID = 'SSID',
}

/**
 * A capture of a device ID. Similar to <ipCaptureEvent>.
 * Used to report information such as ICCID or IMEI numbers associated with an event.
 */
export interface DeviceId {
  /** The type of device ID captured (e.g., IMEI, ICCID, SSID). */
  idType: DeviceIdType | string;
  /* The device ID from which the event occurred.* */
  idValue: string;
  /** The type of event from which the device ID was captured. */
  eventName?: DeviceEventName;
  /** The date and time the device ID was captured. */
  dateTime?: Date;
}
