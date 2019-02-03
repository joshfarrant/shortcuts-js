import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
  WFWorkflowActionIdentifier: 'is.workflow.actions.showdefinition',
  WFWorkflowActionParameters: {},
});

export default showDefinition;
