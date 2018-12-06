import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Frames from Image Action. Splits an animated GID or a photo bursy into individual frames.
 *
 * ```js
 * getFramesFromImage();
 * ```
 */

const getFramesFromImage = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getframesfromimage',
  WFWorkflowActionParameters: {},
});

export default getFramesFromImage;
