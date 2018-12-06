import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Rich Text from HTML Action. Takes the inputted HTML and turns it into rich text, which can then be converted to other formats.
 *
 * ```js
 * getRichTextFromHTML();
 * ```
 */

const getRichTextFromHTML = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getrichtextfromhtml',
  WFWorkflowActionParameters: {},
});

export default getRichTextFromHTML;
