/**
 * The type of hash (e.g. MD5, SHA1).
 */
export enum FileHashType {
  MD5 = 'MD5',
  SHA1 = 'SHA1',
}

/**
 * Metadata associated with a file.
 *
 * @interface OriginalFileHash
 * @see https://report.cybertip.org/ispws/documentation/index.html#original-file-hash
 */
export interface OriginalFileHash {
  /** An original file hash value. */
  value: string;
  /** The type of hash (e.g. MD5, SHA1). */
  hashType: FileHashType | string;
}
