import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import type { Peer2peerIncident } from '../../types';
import { buildIpCapture } from '../common/buildIpCapture';

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  attributeNamePrefix: '@_',
});

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const buildPeer2peerIncident = (
  peer2peerIncident: Peer2peerIncident,
  keyName = 'peer2peerIncident',
): string => {
  const { ipCaptureEvent, ...rest } = peer2peerIncident;

  const ipCaptureEvents = ipCaptureEvent?.map(
    (e) => parser.parse(buildIpCapture(e)).ipCaptureEvent,
  );

  return builder.build({
    [keyName]: {
      ...rest,
      ipCaptureEvent: ipCaptureEvents,
    },
  });
};
