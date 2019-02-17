import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.showdefinition';

/**
 * @action Show Definition
 * @section Content Types > Text >
 * @icon Dictionary
 *
 * Shows the definition of the word passed into the action.
 *
 * ```js
 * showDefinition();
 * ```
 */
const showDefinition = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

showDefinition.identifier = identifier;
showDefinition.invert = invert;

export default showDefinition;
