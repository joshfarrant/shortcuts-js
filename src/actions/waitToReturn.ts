import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.waittoreturn';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

waitToReturn.identifier = identifier;
waitToReturn.invert = invert;

export default waitToReturn;
