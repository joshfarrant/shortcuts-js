import WFSerialization from '../interfaces/WF/WFSerialization';
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
 *   text: 'Some lovely text!',
 * });
 * ```
 */

const speakText = (
  {
    language = 'Default',
    pitch = 1.0,
    rate = 1.0,
    text = '',
    voice = 'Default',
    waitUntilFinished = true,
  }: {
    /** The language to use when speaking text */
    language?: string, // TODO: --------verify type is correct.----------
    /** The pitch to use when speaking text */
    pitch?: number
    /** The rate to use when speaking text */
    rate?: number
    /** The text to speak */
    text?: WFSerialization | string,
    /** The voice to use when speaking text */
    voice?: string, // TODO: --------verify type is correct.----------
    /** Should we wait until the speaking is finished to run the next action */
    waitUntilFinished?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.speaktext',
  WFWorkflowActionParameters: {
    WFSpeakTextLanguage: language,
    WFSpeakTextPitch: pitch,
    WFSpeakTextRate: rate,
    WFText: text,
    WFSpeakTextVoice: voice,
    WFSpeakTextWait: waitUntilFinished,
  },
});

export default speakText;
