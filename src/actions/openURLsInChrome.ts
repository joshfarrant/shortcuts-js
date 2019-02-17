import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'com.google.chrome.ios.openurl';

/**
 * Open URLs in Chrome Action. Opens the inputted URLs in Google Chrome.
 *
 * ```js
 * openURLsInChrome();
 * ```
 */
const openURLsInChrome = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

openURLsInChrome.identifier = identifier;
openURLsInChrome.invert = invert;

export default withActionOutput(openURLsInChrome);
