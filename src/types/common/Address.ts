export enum AddressType {
  Home = 'Home',
  Business = 'Business',
  Billing = 'Billing',
  Shipping = 'Shipping',
  Technical = 'Technical',
}

/**
 * A physical street address.
 */
export interface Address {
  /** Street address. */
  address?: string;
  /** City. */
  city?: string;
  /** Zip or postal code. */
  zipCode?: string;
  /** US state or territory postal abbreviation. */
  state?: string;
  /** State, province, or region if not in the United States. */
  nonUsaState?: string;
  /** ISO 3166-1 alpha-2 two-character country code. */
  country?: string;
  /** Type of address. */
  type?: AddressType;
}
