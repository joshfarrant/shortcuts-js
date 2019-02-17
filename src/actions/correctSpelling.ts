import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.correctspelling';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

correctSpelling.identifier = identifier;
correctSpelling.invert = invert;

export default correctSpelling;
