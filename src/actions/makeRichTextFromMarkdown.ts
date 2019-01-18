/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Make Rich Text from Markdown Action. Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats.
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
