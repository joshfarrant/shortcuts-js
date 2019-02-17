import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.detect.date';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getDatesFromInput.identifier = identifier;
getDatesFromInput.invert = invert;

export default getDatesFromInput;
