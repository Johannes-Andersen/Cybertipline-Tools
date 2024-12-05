import { XMLBuilder } from 'fast-xml-parser';
import type { WebPageIncident } from '../../types';

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const buildWebPageIncident = (
  webPageIncident: WebPageIncident,
  keyName = 'webPageIncident',
): string => {
  const { thirdPartyHostedContent, ...rest } = webPageIncident;

  return builder.build({
    [keyName]: {
      ...rest,
      '@_thirdPartyHostedContent': thirdPartyHostedContent,
    },
  });
};
