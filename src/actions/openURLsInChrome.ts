import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Open URLs in Chrome
 * @section Content Types > Web > Chrome
 * @icon Chrome
 *
 * Opens the inputted URLs in Google Chrome.
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
