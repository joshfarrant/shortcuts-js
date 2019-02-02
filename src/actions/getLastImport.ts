import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Last Import
 * @section Actions > Photos & Video > Photos
 * @icon Photos
 *
 * Gets the most recent photo import from the Photos app.
 *
 * ```js
 * getLastImport();
 * ```
 */

const getLastImport = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getlatestphotoimport',
  WFWorkflowActionParameters: {},
});

export default getLastImport;
