import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Open URLs in Chrome Action. Opens the inputted URLs in Google Chrome.
 *
 * ```js
 * openURLsInChrome();
 * ```
 */
const openURLsInChrome = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'com.google.chrome.ios.openurl',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(openURLsInChrome);
