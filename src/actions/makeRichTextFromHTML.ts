import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getrichtextfromhtml';

/**
 * @action Make Rich Text from HTML
 * @section Content Types > Text > Rich Text
 * @icon RichText
 *
 * Takes the inputted HTML and turns it into rich text, which can then be converted to other formats.
 *
 * ```js
 * makeRichTextFromHTML();
 * ```
 */
const makeRichTextFromHTML = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

makeRichTextFromHTML.identifier = identifier;
makeRichTextFromHTML.invert = invert;

export default makeRichTextFromHTML;
