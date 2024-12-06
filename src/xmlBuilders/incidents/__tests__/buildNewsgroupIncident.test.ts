import { describe, expect, it } from 'vitest';
import type { NewsgroupIncident } from '../../../types';
import { buildNewsgroupIncident } from '../buildNewsgroupIncident';

describe('buildNewsgroupIncident', () => {
  it('should build a newsgroup incident', () => {
    const newsgroupIncident: NewsgroupIncident = {
      name: 'name',
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

    const result = buildNewsgroupIncident(newsgroupIncident);

    expect(result).toMatchSnapshot();
  });
});
