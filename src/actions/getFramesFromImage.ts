import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Frames from Image
 * @section Content Types > Photos & Video > GIFs
 * @icon GIF
 *
 * Splits an animated GIF or a photo burst into individual frames.
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
