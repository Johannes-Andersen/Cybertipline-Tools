import type { IpCapture } from '../common/IpCapture.js';

/**
 * Details for an incident that occurred via a peer-to-peer (also known as P2P)
 * decentralized network that allows users to share files through a direct connection.
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#peer-to-peer-incident
 */
export interface Peer2peerIncident {
  /** The peer-to-peer client associated with the incident. */
  client?: string;
  /** An IP address used by the person or user reported. */
  ipCaptureEvent?: Array<IpCapture>;
  /** The name of the file(s) associated with the incident. */
  fileNames?: string;
  /** Additional information about the peer-to-peer incident not covered by any other section. */
  additionalInfo?: string;
}
