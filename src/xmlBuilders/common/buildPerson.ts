import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import type { Person } from '../../types';
import { buildAddress } from './buildAddress';
import { buildEmail } from './buildEmail';
import { buildPhone } from './buildPhone';

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  attributeNamePrefix: '@_',
});

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const buildPerson = (person: Person, keyName = 'person'): string => {
  const { dateOfBirth, email, phone, address, ...rest } = person;

  const emails = email?.map((e) => parser.parse(buildEmail(e)).email);
  const addresses = address?.map((e) => parser.parse(buildAddress(e)).address);
  const phones = phone?.map((e) => parser.parse(buildPhone(e)).phone);

  return builder.build({
    [keyName]: {
      dateOfBirth: dateOfBirth?.toISOString(),
      email: emails,
      address: addresses,
      phone: phones,
      ...rest,
    },
  });
};
