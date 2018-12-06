import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Make Markdown from RichText Action. Converts the rich text passed as inputto Markdown text (comparable to Aaron Swartz's html2text script).
 *
 * ```js
 * makeMarkdownFromRichText();
 * ```
 */

const makeMarkdownFromRichText = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getmarkdownfromrichtext',
  WFWorkflowActionParameters: {},
});

export default makeMarkdownFromRichText;
