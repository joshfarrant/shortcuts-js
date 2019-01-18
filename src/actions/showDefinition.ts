/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Show Definition Action. Shows the definition of the word passed into the action.
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
