import { XMLBuilder } from 'fast-xml-parser';
import type { IpCapture } from '../../types';

const builder = new XMLBuilder({
  ignoreAttributes: false,
});

export const buildIpCapture = (
  ipCapture: IpCapture,
  keyName = 'ipCaptureEvent',
): string =>
  builder.build({
    [keyName]: {
      ...ipCapture,
      dateTime: ipCapture.dateTime?.toISOString(),
    },
  });
