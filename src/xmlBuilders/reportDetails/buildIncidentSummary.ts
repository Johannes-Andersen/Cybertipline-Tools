import { XMLBuilder } from 'fast-xml-parser';
import type { IncidentSummary } from '../../types';

const builder = new XMLBuilder({
  ignoreAttributes: false,
  suppressEmptyNode: true,
});

export const buildIncidentSummary = (
  incidentSummary: IncidentSummary,
  keyName = 'incidentSummary',
): string =>
  builder.build({
    [keyName]: {
      ...incidentSummary,
      reportAnnotations: Object.fromEntries(
        Object.entries(incidentSummary.reportAnnotations ?? {})
          .filter(([_, value]) => value)
          .map(([key]) => [key, '']),
      ),
      incidentDateTime: incidentSummary.incidentDateTime.toISOString(),
    },
  });
