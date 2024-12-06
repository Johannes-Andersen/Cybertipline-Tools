import { describe, expect, it } from 'vitest';
import { FileHashType, type OriginalFileHash } from '../../../types';
import { buildOriginalFileHash } from '../buildOriginalFileHash';

describe('buildOriginalFileHash', () => {
  it('should build a device ID', () => {
    const originalFileHash: OriginalFileHash = {
      hashType: FileHashType.MD5,
      value: '1234567890',
    };

    const result = buildOriginalFileHash(originalFileHash);

    expect(result).toMatchSnapshot();
  });
});
