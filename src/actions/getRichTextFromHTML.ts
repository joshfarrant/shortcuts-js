import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Rich Text from Markdown Action. Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats.
 *
 * ```js
 * getRichTextFromMarkdown();
 * ```
 */

const getRichTextFromMarkdown = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getrichtextfrommarkdown',
  WFWorkflowActionParameters: {},
});

export default getRichTextFromMarkdown;
