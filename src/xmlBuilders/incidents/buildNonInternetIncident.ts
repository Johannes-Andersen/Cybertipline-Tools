import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import type { NonInternetIncident } from '../../types';
import { buildAddress } from '../common/buildAddress';

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  attributeNamePrefix: '@_',
});

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const buildNonInternetIncident = (
  nonInternetIncident: NonInternetIncident,
  keyName = 'nonInternetIncident',
): string => {
  const { incidentAddress, ...rest } = nonInternetIncident;

  const addresses = incidentAddress?.map(
    (e) => parser.parse(buildAddress(e)).address,
  );

  return builder.build({
    [keyName]: {
      ...rest,
      incidentAddress: addresses,
    },
  });
};
