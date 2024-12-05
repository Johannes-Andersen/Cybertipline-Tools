/**
 * The response code returned from the submittal. 0 is success, any non-zero number is an error code.
 *
 * The following is a non-exhaustive list of possible error codes.
 * @see https://report.cybertip.org/ispws/documentation/index.html#report-response
 */
export enum ResponseCode {
  /** Success */
  Success = 0,
  /** Server error */
  ServerError = 1000,
  /** Save failed */
  SaveFailed = 1100,
  /** Upload failed */
  UploadFailed = 1110,
  /** File upload failed */
  FileUploadFailed = 1111,
  /** Resource not found */
  ResourceNotFound = 1210,
  /** Update failed */
  UpdateFailed = 1300,
  /** Authentication required */
  AuthenticationRequired = 2000,
  /** User is not authorized to perform this action */
  NotAuthorized = 3000,
  /** User does not have authorization to make submissions */
  NotAuthorizedForSubmissions = 3100,
  /** User does not have authorization to make updates */
  NotAuthorizedForUpdates = 3300,
  /** Invalid request */
  InvalidRequest = 4000,
  /** Validation failed */
  ValidationFailed = 4100,
  /** Malformed XML submittal */
  MalformedXmlSubmittal = 4110,
  /** Malformed file submittal */
  MalformedFileSubmittal = 4200,
  /** Report does not exist */
  ReportDoesNotExist = 5001,
  /** File does not exist */
  FileDoesNotExist = 5002,
  /** Report already retracted */
  ReportAlreadyRetracted = 5101,
  /** Report already finished */
  ReportAlreadyFinished = 5102,
}

export enum IncidentType {
  ChildPornography = 'Child Pornography (possession, manufacture, and distribution)',
  ChildSexTrafficking = 'Child Sex Trafficking',
  ChildSexTourism = 'Child Sex Tourism',
  ChildSexualMolestation = 'Child Sexual Molestation',
  MisleadingDomainName = 'Misleading Domain Name',
  MisleadingWordsOrImages = 'Misleading Words or Digital Images on the Internet',
  OnlineEnticement = 'Online Enticement of Children for Sexual Act',
  UnsolicitedObsceneMaterial = 'Unsolicited Obscene Material Sent to a Child',
}

/**
 * Tags to describe the report.
 * @see https://report.cybertip.org/ispws/documentation/index.html#report-annotations
 */
export enum ReportAnnotation {
  /** The report is associated with sextortion. */
  Sextortion = 'sextortion',
  /** The report is associated with solicitation of child sexual assault material (CSAM). */
  CsamSolicitation = 'csamSolicitation',
  /** The report is associated with an interaction between minors. */
  MinorToMinorInteraction = 'minorToMinorInteraction',
  /** The report is associated with spam. */
  Spam = 'spam',
}

/**
 * Tags used to describe a file.
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#file-annotations
 */
export enum FileAnnotations {
  /** The file is depicting anime, drawing, cartoon, virtual or hentai. */
  AnimeDrawingVirtualHentai = 'animeDrawingVirtualHentai',
  /** The file is being shared/posted out of mimicry or other seemingly non-malicious intent. */
  PotentialMeme = 'potentialMeme',
  /** The file is circulating rapidly from one user to another. */
  Viral = 'viral',
  /** The file contains content that is believed to be self-produced */
  PossibleSelfProduction = 'possibleSelfProduction',
  /** The file depicts an intentional act of causing physical injury or trauma to a person. */
  PhysicalHarm = 'physicalHarm',
  /** The file depicts graphic violence, including but not limited to acts of brutality or detailed or vivid gruesomeness. */
  ViolenceGore = 'violenceGore',
  /** The file involves an animal. */
  Bestiality = 'bestiality',
  /** The file depicts content that was streamed live at the time it was uploaded. */
  LiveStreaming = 'liveStreaming',
  /** The file depicts an infant. */
  Infant = 'infant',
  /** The file contains content that is believed to be Generative Artificial Intelligence. */
  GenerativeAI = 'generativeAi',
}

export enum FileRelevance {
  /** Content that is the motivation for making the CyberTipline report, according to the chosen incident type.
   *
   * Only "Reported" files may be identified as potential meme or be given an industry classification.
   */
  Reported = 'Reported',
  /** Supplementary content that provides contextual value to the report.
   *
   * A part of the communication containing apparent child pornography, including any data or information regarding the transmission of the communication
   * or any images, data, or other digital files contained in, or attached to, the communication (18 U.S. Code § 2258A (b)(5)).
   */
  SupplementalReported = 'Supplemental Reported',
}

/**
 * A = Prepubescent Minor
 * B = Pubescent Minor
 *
 * 1 (Sex Act): Any imagery depicting sexual intercourse (
 * including genital-genital, oral-genital, anal-genital,
 * or oral-anal whether between person of the same or opposite sex),
 * bestiality, masturbation, sadistic or masochistic abuse, degradation,
 * or any such depiction of the above that lacks serious literary, artistic, political, or scientific value.
 *
 * 2 (Lascivious Exhibition): Any imagery depicting the lascivious exhibition of the anus, genitals, or pubic area of any person,
 * where a minor is engaging in the lascivious exhibition or being used in connection with sexually explicit conduct,
 * which may include but is not limited to imagery where the focal point is on the child's anus, genitals,
 * or pubic area and where the depiction is intended or designed to elicit a sexual response in the viewer.
 */
export enum IndustryClassification {
  /** Prepubescent Minor - Sex Act*/
  A1 = 'A1',
  /** Prepubescent Minor - Lascivious Exhibition */
  A2 = 'A2',
  /** Pubescent Minor - Sex Act */
  B1 = 'B1',
  /** Pubescent Minor - Lascivious Exhibition */
  B2 = 'B2',
}
