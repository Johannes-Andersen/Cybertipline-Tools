import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import type { LawEnforcement } from '../../types';
import { buildContactPerson } from '../common/buildPerson';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const buildLawEnforcement = (
  lawEnforcement: LawEnforcement,
  keyName = 'lawEnforcement',
): string => {
  const { officerContact, servedLegalProcessInternational, ...rest } =
    lawEnforcement;

  const person = officerContact
    ? parser.parse(buildContactPerson(officerContact, 'officerContact'))
        .officerContact
    : undefined;

  return builder.build({
    [keyName]: {
      officerContact: person,
      servedLegalProcessInternational: servedLegalProcessInternational
        ? {
            '#text': !!servedLegalProcessInternational,
            '@_fleaCountry':
              typeof servedLegalProcessInternational === 'object'
                ? servedLegalProcessInternational.fleaCountry
                : undefined,
          }
        : undefined,
      ...rest,
    },
  });
};
