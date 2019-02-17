import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getmarkdownfromrichtext';

/**
 * @action Make Markdown from Rich Text
 * @section Content Types > Text > Rich Text
 * @icon RichText
 *
 * Converts the rich text passed as input to Markdown text (comparable to Aaron Swartz's html2text script).
 *
 * ```js
 * makeMarkdownFromRichText();
 * ```
 */
const makeMarkdownFromRichText = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

makeMarkdownFromRichText.identifier = identifier;
makeMarkdownFromRichText.invert = invert;

export default makeMarkdownFromRichText;
