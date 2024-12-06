import { describe, expect, it } from 'vitest';
import { Country, type LawEnforcement } from '../../../types';
import { buildLawEnforcement } from '../buildLawEnforcement';

describe('buildLawEnforcement', () => {
  it('should build a law enforcement with all fields', () => {
    const lawEnforcement: LawEnforcement = {
      agencyName: 'FBI Cyber Division',
      caseNumber: 'FBI-2024-001',
      officerContact: {
        firstName: 'John',
        lastName: 'Smith',
      },
      reportedToLe: true,
      servedLegalProcessDomestic: true,
      servedLegalProcessInternational: {
        fleaCountry: Country.Canada,
      },
    };

    const result = buildLawEnforcement(lawEnforcement);

    expect(result).toMatchSnapshot();
  });

  it('should build a law enforcement with minimal fields', () => {
    const lawEnforcement: LawEnforcement = {
      agencyName: 'Local Police Department',
      reportedToLe: false,
    };

    const result = buildLawEnforcement(lawEnforcement);

    expect(result).toMatchSnapshot();
  });

  it('should build a law enforcement with boolean servedLegalProcessInternational', () => {
    const lawEnforcement: LawEnforcement = {
      agencyName: 'Interpol',
      caseNumber: 'INT-2024-002',
      reportedToLe: true,
      servedLegalProcessInternational: true,
    };

    const result = buildLawEnforcement(lawEnforcement);

    expect(result).toMatchSnapshot();
  });

  it('should build a law enforcement with only officer contact', () => {
    const lawEnforcement: LawEnforcement = {
      agencyName: 'Local Police Department',
      officerContact: {
        firstName: 'Jane',
        lastName: 'Doe',
        email: [
          {
            email: 'jane.doe@police.gov',
            verified: true,
          },
        ],
      },
      reportedToLe: true,
    };

    const result = buildLawEnforcement(lawEnforcement);

    expect(result).toMatchSnapshot();
  });
});
