import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Images from Input Action. Gets images from the result of the previous action.
 *
 * ```js
 * getImagesFromInput();
 * ```
 */

const getImagesFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.images',
  WFWorkflowActionParameters: {},
});

export default getImagesFromInput;
