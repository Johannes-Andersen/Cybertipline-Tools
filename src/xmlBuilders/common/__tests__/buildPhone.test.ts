import { describe, expect, it } from 'vitest';
import { type Phone, PhoneType } from '../../../types';
import { buildPhone } from '../buildPhone';

describe('buildPhone', () => {
  it('should build a verified phone number', () => {
    const phone: Phone = {
      number: '123-456-7890',
      countryCallingCode: '+99',
      verified: true,
      extension: '123',
      verificationDate: new Date('2024-01-01'),
      type: PhoneType.Mobile,
    };

    const result = buildPhone(phone);

    expect(result).toMatchSnapshot();
  });

  it('should build a unverified phone number', () => {
    const phone: Phone = {
      number: '123-456-7890',
      countryCallingCode: '+99',
      verified: false,
    };

    const result = buildPhone(phone);

    expect(result).toMatchSnapshot();
  });

  it('should build a phone number with only the number', () => {
    const phone: Phone = {
      number: '123-456-7890',
    };

    const result = buildPhone(phone);

    expect(result).toMatchSnapshot();
  });
});
