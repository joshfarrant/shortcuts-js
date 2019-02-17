import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.detect.images';

/**
 * @action Get Images from Input
 * @section Content Types > Photos & Video > Images
 * @icon Image
 *
 * Gets images from the result of the previous action. For example, this action can get the album art of a song, or all the images on a web page.
 *
 * ```js
 * getImagesFromInput();
 * ```
 */
const getImagesFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getImagesFromInput.identifier = identifier;
getImagesFromInput.invert = invert;

export default getImagesFromInput;
