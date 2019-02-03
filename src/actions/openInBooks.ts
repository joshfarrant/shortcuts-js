import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Open in Books
 * @section Content Types > Documents > Books
 * @icon Books
 *
 * Open in Books Action. Opens the input as a PDF in Books.
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
