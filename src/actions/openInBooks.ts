import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set openInBooks Action. Opens the input as a PDF in Books.
 *
 * ```js
 * openInBooks();
 * ```
 */
const openInBooks = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'com.apple.iBooks.openin',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(openInBooks);
