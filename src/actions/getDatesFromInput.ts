import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Dates from Input
 * @section Content Types > Calendar > Dates
 * @icon Date
 *
 * Returns any dates found in the output from the previous action.
 *
 * ```js
 * getDatesFromInput();
 * ```
 */

const getDatesFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.date',
  WFWorkflowActionParameters: {},
});

export default getDatesFromInput;
