import { XMLBuilder } from 'fast-xml-parser';
import type { EstimatedLocation } from '../../types';

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const buildEstimatedLocation = (
  location: EstimatedLocation,
  keyName = 'estimatedLocation',
): string => {
  const { timestamp, verified, ...rest } = location;

  return builder.build({
    [keyName]: {
      '@_verified': verified,
      '@_timestamp': timestamp?.toISOString(),
      ...rest,
    },
  });
};
