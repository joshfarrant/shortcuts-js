import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'com.apple.iBooks.openin';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

openInBooks.identifier = identifier;
openInBooks.invert = invert;

export default withActionOutput(openInBooks);
