import { describe, expect, it } from 'vitest';
import type { Peer2peerIncident } from '../../../types';
import { buildPeer2peerIncident } from '../buildPeer2peerIncident';

describe('buildPeer2peerIncident', () => {
  it('should build a peer to peer incident', () => {
    const peer2peerIncident: Peer2peerIncident = {
      ipCaptureEvent: [
        {
          ipAddress: '192.168.1.1',
        },
        {
          ipAddress: '192.168.1.2',
          possibleProxy: true,
        },
      ],
      client: 'My Client',
      fileNames: 'My File',
      additionalInfo: 'This is a test',
    };

    const result = buildPeer2peerIncident(peer2peerIncident);

    expect(result).toMatchSnapshot();
  });
});
