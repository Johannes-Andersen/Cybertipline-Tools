import { describe, expect, it } from 'vitest';
import type { OnlineGamingIncident } from '../../../types';
import { buildOnlineGamingIncident } from '../buildOnlineGamingIncident';

describe('buildOnlineGamingIncident', () => {
  it('should build a online gaming incident', () => {
    const onlineGamingIncident: OnlineGamingIncident = {
      console: 'My Console',
      gameName: 'My Game',
      additionalInfo: 'This is a test',
      content: 'This is a test',
    };

    const result = buildOnlineGamingIncident(onlineGamingIncident);

    expect(result).toMatchSnapshot();
  });
});
