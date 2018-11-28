import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Wait to Return Action. Pauses execution until you leave the Shortcuts app and return to it.
 *
 * ```js
 * waitToReturn();
 * ```
 */
const waitToReturn = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.waittoreturn',
  WFWorkflowActionParameters: {},
});

export default waitToReturn;
