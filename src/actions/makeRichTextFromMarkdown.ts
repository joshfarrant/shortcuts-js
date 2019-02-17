import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getrichtextfrommarkdown';

/**
 * @action Make Rich Text from Markdown
 * @section Content Types > Text > Rich Text
 * @icon RichText
 *
 * Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats.
 *
 * ```js
 * makeRichTextFromMarkdown();
 * ```
 */
const makeRichTextFromMarkdown = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

makeRichTextFromMarkdown.identifier = identifier;
makeRichTextFromMarkdown.invert = invert;

export default makeRichTextFromMarkdown;
