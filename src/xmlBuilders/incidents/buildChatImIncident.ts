import { XMLBuilder } from 'fast-xml-parser';
import type { ChatImIncident } from '../../types';

const builder = new XMLBuilder({
  ignoreAttributes: false,
});

export const buildChatImIncident = (
  chatImIncident: ChatImIncident,
  keyName = 'chatImIncident',
): string =>
  builder.build({
    [keyName]: chatImIncident,
  });
