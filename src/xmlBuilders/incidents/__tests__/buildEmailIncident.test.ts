import { describe, expect, it } from 'vitest';
import type { EmailIncident } from '../../../types';
import { buildEmailIncident } from '../buildEmailIncident';

describe('buildEmailIncident', () => {
  it('should build a email incident', () => {
    const emailIncident: EmailIncident = {
      emailAddress: [
        {
          email: 'test@test.com',
          verified: true,
        },
        {
          email: 'test2@test.com',
          verified: false,
        },
      ],
      content: 'content',
      additionalInfo: 'additional info',
    };

    const result = buildEmailIncident(emailIncident);

    expect(result).toMatchSnapshot();
  });
});
