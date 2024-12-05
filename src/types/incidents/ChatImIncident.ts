/**
 * Details for an incident that occurred over IM or during a chat session.
 *
 * @see https://report.cybertip.org/ispws/documentation/index.html#chatim-incident
 */
export interface ChatImIncident {
  /** The chat or instant messenger program used. */
  chatClient?: string;
  /** The name of the chat room. */
  chatRoomName?: string;
  /** The content of the chat. */
  content?: string;
  /** Additional information about the chat or instant messaging incident not covered by any other section. */
  additionalInfo?: string;
}
