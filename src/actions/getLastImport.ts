import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Last Import Action. Gets the most recent photo import from the Photos app.
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
