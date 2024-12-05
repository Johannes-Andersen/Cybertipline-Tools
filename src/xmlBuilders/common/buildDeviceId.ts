import { XMLBuilder } from 'fast-xml-parser';
import type { DeviceId } from '../../types';

const builder = new XMLBuilder();

export const buildDeviceId = (
  deviceId: DeviceId,
  keyName = 'deviceId',
): string =>
  builder.build({
    [keyName]: {
      ...deviceId,
      dateTime: deviceId.dateTime?.toISOString(),
    },
  });
