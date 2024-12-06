import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import type { SubmitFileDetails } from '../../types';
import { buildDeviceId } from '../common/buildDeviceId';
import { buildIpCapture } from '../common/buildIpCapture';
import { buildFileDetails } from '../fileDetails/buildFileDetails';
import { buildOriginalFileHash } from '../fileDetails/buildOriginalFileHash';

const parser = new XMLParser({
  ignoreAttributes: false,
  allowBooleanAttributes: true,
  attributeNamePrefix: '@_',
});

const builder = new XMLBuilder({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
});

export const buildSubmitFileDetails = (
  fileDetails: SubmitFileDetails,
  keyName = 'fileDetails',
): string => {
  const { originalFileHash, ipCaptureEvent, deviceId, details, ...rest } =
    fileDetails;

  const originalFileHashes = originalFileHash?.map(
    (e) => parser.parse(buildOriginalFileHash(e)).originalFileHash,
  );
  const deviceIds = deviceId?.map(
    (e) => parser.parse(buildDeviceId(e)).deviceId,
  );
  const fileDetail = details?.map(
    (e) => parser.parse(buildFileDetails(e)).fileDetails,
  );
  const ipCaptureEvents = ipCaptureEvent
    ? parser.parse(buildIpCapture(ipCaptureEvent)).ipCaptureEvent
    : undefined;
  const detail = details?.map((e) => parser.parse(buildFileDetails(e)).details);

  return builder.build({
    [keyName]: {
      fileDetails: fileDetail,
      details: detail,
      ipCaptureEvent: ipCaptureEvents,
      originalFileHash: originalFileHashes,
      deviceId: deviceIds,
      ...rest,
    },
  });
};
