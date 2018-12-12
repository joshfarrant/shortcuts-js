import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Delete Photos Action. Deletes the photos passed as input from the device's photo library. This action asks for confirmation before performing the deletion
 *
 * ```js
 * deletePhotos();
 * ```
 */

const deletePhotos = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.deletephotos',
  WFWorkflowActionParameters: {},
});

export default deletePhotos;
