import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Play Sound Action. Plays the audio file passed as input, or a default notification sound if no audio file was passed.
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
