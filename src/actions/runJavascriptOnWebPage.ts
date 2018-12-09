import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Match Text Action. Searches text passed into the action for matches to a regular expression.
 *
 * ```js
 * runJavascriptOnWebPage({
 *   text: 'var result = [];
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
 *   completion(result);'
 * });
 * ```
 */
const runJavascriptOnWebPage = (
  options: {
    /** The text to set */
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
