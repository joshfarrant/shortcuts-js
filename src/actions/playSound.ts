import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.playsound';

/**
 * @action Play Sound
 * @section Actions > Scripting > Notification
 * @icon Sound
 *
 * Plays the audio file passed as input, or a default notification sound if no audio file was passed.
 *
 * ```js
 * playSound();
 * ```
 */
const playSound = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

playSound.identifier = identifier;
playSound.invert = invert;

export default playSound;
