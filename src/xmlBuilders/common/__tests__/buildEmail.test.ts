import { describe, expect, it } from 'vitest';
import { type Email, EmailType } from '../../../types';
import { buildEmail } from '../buildEmail';

describe('buildEmail', () => {
  it('should build a verified email', () => {
    const email: Email = {
      email: 'example@example.com',
      type: EmailType.Work,
      verified: true,
      verificationDate: new Date('2024-01-01T00:00:00.000Z'),
    };

    const result = buildEmail(email);

    expect(result).toMatchSnapshot();
  });

  it('should build an unverified email', () => {
    const email: Email = {
      email: 'example@example.com',
      type: EmailType.Work,
      verified: false,
    };

    const result = buildEmail(email);

    expect(result).toMatchSnapshot();
  });

  it('should build an email with unknown verification status', () => {
    const email: Email = {
      email: 'example@example.com',
      type: EmailType.Work,
    };

    const result = buildEmail(email);

    expect(result).toMatchSnapshot();
  });
});
