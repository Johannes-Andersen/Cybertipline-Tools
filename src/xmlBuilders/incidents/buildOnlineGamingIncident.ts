import { XMLBuilder } from 'fast-xml-parser';
import type { OnlineGamingIncident } from '../../types';

const builder = new XMLBuilder({
  ignoreAttributes: false,
});

export const buildOnlineGamingIncident = (
  onlineGamingIncident: OnlineGamingIncident,
  keyName = 'onlineGamingIncident',
): string =>
  builder.build({
    [keyName]: onlineGamingIncident,
  });
