import { describe, expect, it } from 'vitest';
import type { WebPageIncident } from '../../../types';
import { buildWebPageIncident } from '../buildWebPageIncident';

describe('buildWebPageIncident', () => {
  it('should build a web page incident', () => {
    const webPageIncident: WebPageIncident = {
      additionalInfo: 'This is a test',
      thirdPartyHostedContent: true,
      url: ['https://example.com', 'https://example.org'],
    };

    const result = buildWebPageIncident(webPageIncident);

    expect(result).toMatchSnapshot();
  });
});
