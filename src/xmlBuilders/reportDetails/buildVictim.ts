import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import type { Victim } from '../../types';
import { buildDeviceId } from '../common/buildDeviceId';
import { buildEstimatedLocation } from '../common/buildEstimatedLocation';
import { buildIpCapture } from '../common/buildIpCapture';
import { buildPerson } from '../common/buildPerson';

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  attributeNamePrefix: '@_',
});

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const buildVictim = (victim: Victim, keyName = 'victim'): string => {
  const { estimatedLocation, deviceId, ipCaptureEvent, victimPerson, ...rest } =
    victim;

  const deviceIds = deviceId?.map(
    (e) => parser.parse(buildDeviceId(e)).deviceId,
  );
  const ipCaptureEvents = ipCaptureEvent?.map(
    (e) => parser.parse(buildIpCapture(e)).ipCaptureEvent,
  );
  const estimatedLocations = estimatedLocation
    ? parser.parse(buildEstimatedLocation(estimatedLocation)).estimatedLocation
    : undefined;
  const person = parser.parse(buildPerson(victimPerson)).person;

  return builder.build({
    [keyName]: {
      deviceId: deviceIds,
      ipCaptureEvent: ipCaptureEvents,
      estimatedLocation: estimatedLocations,
      victimPerson: person,
      ...rest,
    },
  });
};
