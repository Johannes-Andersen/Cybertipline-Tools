/**
 * Details for an incident that occurred during an online game.
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#online-gaming-incident
 */
export interface OnlineGamingIncident {
  /** The name of the game in which the incident occurred. */
  gameName?: string;
  /** The name of the gaming console used in the incident. */
  console?: string;
  /** The content of the message/chat that occurred during the game. */
  content?: string;
  /** Additional information about the online gaming incident not covered by any other section. */
  additionalInfo?: string;
}
