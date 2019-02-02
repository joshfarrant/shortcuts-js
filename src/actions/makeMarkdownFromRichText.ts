import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Make Markdown from Rich Text
 * @section Actions > Text > Rich Text
 * @icon RichText
 *
 * Converts the rich text passed as input to Markdown text (comparable to Aaron Swartz's html2text script).
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
