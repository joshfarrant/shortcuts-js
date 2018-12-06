import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Markdown from RichText Action. Converts the rich textpassed as inputto Markdown text.
 *
 * ```js
 * getMarkdownFromRichText();
 * ```
 */

const getMarkdownFromRichText = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getmarkdownfromrichtext',
  WFWorkflowActionParameters: {},
});

export default getMarkdownFromRichText;
