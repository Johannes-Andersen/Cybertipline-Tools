import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import type { CellPhoneIncident } from '../../types';
import { buildPhone } from '../common/buildPhone';

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  attributeNamePrefix: '@_',
});

const builder = new XMLBuilder({
  ignoreAttributes: false,
});

export const buildCellPhoneIncident = (
  cellPhoneIncident: CellPhoneIncident,
  keyName = 'cellPhoneIncident',
): string => {
  const { phoneNumber, ...rest } = cellPhoneIncident;

  const phone = phoneNumber
    ? parser.parse(buildPhone(phoneNumber)).phone
    : undefined;

  return builder.build({
    [keyName]: {
      phone,
      ...rest,
    },
  });
};
