import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  text?: WFSerialization | string;
}

const identifier = 'is.workflow.actions.showresult';

/**
 * @action Show Result
 * @section Actions > Scripting >
 * @icon Scripting
 *
 * Shows the specified text in Siri or in an alert.
 *
 * ```js
 * showResult({
 *   text: 'Hello, world!',
 * });
 * ```
 */
const showResult = (
  {
    /** The text to show in the dialogue */
    text = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    Text: text,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  text: WFAction.WFWorkflowActionParameters.Text,
});

showResult.identifier = identifier;
showResult.invert = invert;

export default showResult;
