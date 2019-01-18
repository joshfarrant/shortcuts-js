/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
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
