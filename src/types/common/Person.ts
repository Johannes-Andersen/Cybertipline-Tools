import type { Address } from './Address.js';
import type { Email } from './Email.js';
import type { Phone } from './Phone.js';

/** A real world person. */
export interface Person {
  /** The person’s first name. */
  firstName?: string;
  /** The person’s last name. */
  lastName?: string;
  /** A phone number. */
  phone?: Array<Phone>;
  /** An email address. */
  email?: Array<Email>;
  /** A physical address. */
  address?: Array<Address>;
  /** The person’s approximate age. */
  age?: number;
  /** The person’s date of birth. */
  dateOfBirth?: Date;
}

/**
 * A real world person with information pertinent for professional contact.
 */
export type ContactPerson = Omit<Person, 'age' | 'dateOfBirth'>;
