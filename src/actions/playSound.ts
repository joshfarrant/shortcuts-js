import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
  WFWorkflowActionIdentifier: 'is.workflow.actions.playsound',
  WFWorkflowActionParameters: {},
});

export default playSound;
