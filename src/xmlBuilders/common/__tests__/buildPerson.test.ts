import { describe, expect, it } from 'vitest';
import { type ContactPerson, Country, type Person } from '../../../types';
import { buildContactPerson, buildPerson } from '../buildPerson';

describe('buildPerson', () => {
  it('should build a person', () => {
    const person: Person = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: new Date('1990-01-01'),
      email: [
        { email: 'john.doe@example.com', verified: true },
        { email: 'john.doe@example.com', verified: false },
      ],
      phone: [
        { number: '123-456-7890', countryCallingCode: '+99' },
        { number: '123-456-7890', verified: false },
      ],
      address: [
        { address: '123 Main St, Anytown, USA', country: Country.UnitedStates },
        { address: '123 Main St, Anytown, USA' },
      ],
      age: 30,
    };

    const result = buildPerson(person);

    expect(result).toMatchSnapshot();
  });
});

describe('buildContactPerson', () => {
  it('should build a contact person', () => {
    const person: ContactPerson = {
      firstName: 'John',
      lastName: 'Doe',
      email: [
        { email: 'john.doe@example.com', verified: true },
        { email: 'john.doe@example.com', verified: false },
      ],
      phone: [
        { number: '123-456-7890', countryCallingCode: '+99' },
        { number: '123-456-7890', verified: false },
      ],
      address: [
        { address: '123 Main St, Anytown, USA', country: Country.UnitedStates },
        { address: '123 Main St, Anytown, USA' },
      ],
    };

    const result = buildContactPerson(person);

    expect(result).toMatchSnapshot();
  });
});
