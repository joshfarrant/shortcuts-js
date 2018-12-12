import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Make Rich Text from HTML Action. Takes the inputted HTML and turns it into rich text, which can then be converted to other formats.
 *
 * ```js
 * makeRichTextFromHTML();
 * ```
 */

const makeRichTextFromHTML = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getrichtextfromhtml',
  WFWorkflowActionParameters: {},
});

export default makeRichTextFromHTML;
