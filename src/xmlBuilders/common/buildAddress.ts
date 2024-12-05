import { XMLBuilder } from 'fast-xml-parser';
import type { Address } from '../../types';

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const buildAddress = (address: Address, keyName = 'address'): string => {
  const { type, ...rest } = address;

  return builder.build({
    [keyName]: {
      '@_type': type,
      ...rest,
    },
  });
};
