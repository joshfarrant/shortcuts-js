import { withActionOutput } from '../utils/withActionOutput';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  text?: WFSerialization | string;
}

const identifier = 'is.workflow.actions.runjavascriptonwebpage';

/**
 * @action Run JavaScript on Web Page
 * @section Content Types > Web > Safari
 * @icon Safari
 *
 * Runs JavaScript on a Safari web page passed in as input
 *
 * ```js
 * runJavaScriptOnWebPage({
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
const runJavaScriptOnWebPage = (
  {
    /** The JavaScript to run */
    text = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFJavaScript: text,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  text: WFAction.WFWorkflowActionParameters.WFJavaScript,
});

runJavaScriptOnWebPage.identifier = identifier;
runJavaScriptOnWebPage.invert = invert;

export default withActionOutput(runJavaScriptOnWebPage);
