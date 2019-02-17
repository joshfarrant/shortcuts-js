import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getframesfromimage';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getFramesFromImage.identifier = identifier;
getFramesFromImage.invert = invert;

export default getFramesFromImage;
