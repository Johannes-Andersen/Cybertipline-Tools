import { describe, expect, it } from 'vitest';
import { Country, type EstimatedLocation } from '../../../types';
import { buildEstimatedLocation } from '../buildEstimatedLocation';

describe('buildEstimatedLocation', () => {
  it('should build a verified estimated location', () => {
    const estimatedLocation: EstimatedLocation = {
      city: 'city',
      region: 'region',
      countryCode: Country.UnitedStates,
      verified: true,
      timestamp: new Date('2024-01-01T00:00:00.000Z'),
    };

    const result = buildEstimatedLocation(estimatedLocation);

    expect(result).toMatchSnapshot();
  });

  it('should build an unverified estimated location', () => {
    const estimatedLocation: EstimatedLocation = {
      city: 'city',
      region: 'region',
      countryCode: Country.Albania,
      verified: false,
    };

    const result = buildEstimatedLocation(estimatedLocation);

    expect(result).toMatchSnapshot();
  });

  it('should build an estimated location with unknown verification status', () => {
    const estimatedLocation: EstimatedLocation = {
      city: 'city',
      region: 'region',
      countryCode: Country.Romania,
    };

    const result = buildEstimatedLocation(estimatedLocation);

    expect(result).toMatchSnapshot();
  });
});
