import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Correct Spelling
 * @section Content Types > Text > Text Editing
 * @icon Text
 *
 * Autocorrects the spelling of text passed into the action.
 *
 * Correct Spelling Action. Autocorrects the spelling of text passed into the action.
 *
 * ```js
 * correctSpelling();
 * ```
 */

const correctSpelling = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.correctspelling',
  WFWorkflowActionParameters: {},
});

export default correctSpelling;
