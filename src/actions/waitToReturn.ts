import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Wait to Return
 * @section Actions > Scripting > Control Flow
 * @icon Scripting
 *
 * Pauses execution until you leave the Shortcuts app and return to it. This action might be useful after an action that switches apps, to pause execution until you return to the Shortcuts app.
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
