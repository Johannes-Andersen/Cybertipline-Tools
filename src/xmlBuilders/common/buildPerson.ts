import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import type { ContactPerson, Person } from '../../types';
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
  const { dateOfBirth, email, phone, address, firstName, lastName, ...rest } =
    person;

  const emails = email?.map((e) => parser.parse(buildEmail(e)).email);
  const addresses = address?.map((e) => parser.parse(buildAddress(e)).address);
  const phones = phone?.map((e) => parser.parse(buildPhone(e)).phone);

  return builder.build({
    [keyName]: {
      firstName,
      lastName,
      email: emails,
      dateOfBirth: dateOfBirth?.toISOString(),
      address: addresses,
      phone: phones,
      ...rest,
    },
  });
};

export const buildContactPerson = (
  person: ContactPerson,
  keyName = 'contactPerson',
): string => {
  const { email, phone, address, firstName, lastName, ...rest } = person;

  const emails = email?.map((e) => parser.parse(buildEmail(e)).email);
  const addresses = address?.map((e) => parser.parse(buildAddress(e)).address);
  const phones = phone?.map((e) => parser.parse(buildPhone(e)).phone);

  return builder.build({
    [keyName]: {
      firstName,
      lastName,
      email: emails,
      address: addresses,
      phone: phones,
      ...rest,
    },
  });
};
