import { describe, expect, it } from 'vitest';
import type { ChatImIncident } from '../../../types';
import { buildChatImIncident } from '../buildChatImIncident';

describe('buildChatImIncident', () => {
  it('should build a chat im incident', () => {
    const chatImIncident: ChatImIncident = {
      additionalInfo: 'additionalInfo',
      chatRoomName: 'chatRoomName',
      chatClient: 'chatClient',
      content: 'content',
    };

    const result = buildChatImIncident(chatImIncident);

    expect(result).toMatchSnapshot();
  });
});
