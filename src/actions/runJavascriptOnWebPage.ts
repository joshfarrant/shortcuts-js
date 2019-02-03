import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Run JavaScript on Web Page
 * @section Content Types > Web > Safari
 * @icon Safari
 *
 * Runs JavaScript on a Safari web page passed in as input
 *
 * ```js
 * runJavascriptOnWebPage({
 *   text: '
  *   var result = [];
  *   // Get all links from the page
  *   var elements = document.querySelectorAll("a");
  *   for (let element of elements) {
  *     result.push({
  *       "url": element.href,
  *       "text": element.innerText
  *     });
  *   }
  *
  *   // Call completion to finish
  *   completion(result);
 *   `,
 * });
 * ```
 */

const runJavascriptOnWebPage = (
  options: {
    /** The JavaScript to run */
    text?: WFSerialization | string,
  },
): WFWorkflowAction => {
  const {
    text = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.runjavascriptonwebpage',
    WFWorkflowActionParameters: {
      WFJavaScript: text,
    },
  };
};

export default withActionOutput(runJavascriptOnWebPage);
