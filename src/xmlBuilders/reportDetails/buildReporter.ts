import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import type { Reporter } from '../../types';
import { buildContactPerson, buildPerson } from '../common/buildPerson';

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  attributeNamePrefix: '@_',
});

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const buildReporter = (
  reporter: Reporter,
  keyName = 'reporter',
): string => {
  const { reportingPerson, contactPerson, ...rest } = reporter;

  const person = parser.parse(buildPerson(reportingPerson)).person;
  const contact = contactPerson
    ? parser.parse(buildContactPerson(contactPerson)).contactPerson
    : undefined;

  return builder.build({
    [keyName]: {
      ...rest,
      reportingPerson: person,
      contactPerson: contact,
    },
  });
};
