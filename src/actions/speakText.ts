import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Speak Text
 * @section Content Types > Documents > Speak Text
 * @icon Documents
 *
 * Speaks the inputted text aloud.
 *
 * ```js
 * speakText({
 *   text: 'Well hello there!',
 *   language: 'Default',
 *   pitch: 1.0,
 *   rate: 0,
 *   voice: 'Default',
 *   waitUntilFinished: true,
 * });
 * ```
 */

const speakText = (
  {
    language = 'Default',
    pitch = 1.0,
    rate = 0.5,
    voice = 'Default',
    waitUntilFinished = true,
  }: {
    /** The language to use when speaking text */
    language?: string,
    /** The pitch to use when speaking text */
    pitch?: number
    /** The rate to use when speaking text */
    rate?: number
    /** The voice to use when speaking text */
    voice?: string,
    /** Should we wait until the speaking is finished to run the next action */
    waitUntilFinished?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.speaktext',
  WFWorkflowActionParameters: {
    WFSpeakTextLanguage: language,
    WFSpeakTextPitch: pitch,
    WFSpeakTextRate: rate,
    WFSpeakTextVoice: voice,
    WFSpeakTextWait: waitUntilFinished,
  },
});

export default speakText;
