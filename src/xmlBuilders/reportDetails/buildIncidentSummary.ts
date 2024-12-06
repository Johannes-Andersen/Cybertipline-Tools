import { XMLBuilder } from 'fast-xml-parser';
import type { IncidentSummary } from '../../types';

const builder = new XMLBuilder({
  ignoreAttributes: false,
});

export const buildIncidentSummary = (
  incidentSummary: IncidentSummary,
  keyName = 'incidentSummary',
): string =>
  builder.build({
    [keyName]: {
      ...incidentSummary,
      incidentDateTime: incidentSummary.incidentDateTime.toISOString(),
    },
  });
