import { describe, expect, it } from 'vitest';
import { DeviceEventName, type DeviceId } from '../../../types';
import { buildDeviceId } from '../buildDeviceId';

describe('buildDeviceId', () => {
  it('should build a device ID', () => {
    const deviceId: DeviceId = {
      dateTime: new Date('2024-01-01T00:00:00.000Z'),
      idType: 'idType',
      idValue: 'idValue',
      eventName: DeviceEventName.Purchase,
    };

    const result = buildDeviceId(deviceId);

    expect(result).toMatchSnapshot();
  });
});
