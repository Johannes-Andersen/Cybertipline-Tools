import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import type { NewsgroupIncident } from '../../types';
import { buildEmail } from '../common/buildEmail';

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  attributeNamePrefix: '@_',
});

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const builNewsgroupIncident = (
  newsgroupIncident: NewsgroupIncident,
  keyName = 'newsgroupIncident',
): string => {
  const { emailAddress, ...rest } = newsgroupIncident;

  const emails = emailAddress?.map((e) => parser.parse(buildEmail(e)).email);

  return builder.build({
    [keyName]: {
      ...rest,
      emailAddress: emails,
    },
  });
};
