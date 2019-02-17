import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.deletephotos';

/**
 * @action Delete Photos
 * @section Content Types > Photos & Video > Photos
 * @icon Photos
 *
 * Deletes the photos passed as input from the device's photo library. This action asks for confirmation before performing the deletion.
 *
 * ```js
 * deletePhotos();
 * ```
 */
const deletePhotos = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

deletePhotos.identifier = identifier;
deletePhotos.invert = invert;

export default deletePhotos;
