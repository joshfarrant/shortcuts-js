import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Make Rich Text from Markdown
 * @section Actions > Text > Rich Text
 * @icon RichText
 *
 * Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats.
 *
 * ```js
 * makeRichTextFromMarkdown();
 * ```
 */

const makeRichTextFromMarkdown = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getrichtextfrommarkdown',
  WFWorkflowActionParameters: {},
});

export default makeRichTextFromMarkdown;
