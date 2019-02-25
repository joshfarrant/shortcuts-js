import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  value?: string[];
}

const identifier = 'is.workflow.actions.list';

/**
 * @action List
 * @section Actions > Scripting > Lists
 * @icon Scripting
 *
 * Allows you to specify a list of items to be passed to the next action.
 *
 * ```js
 * // Create a list
 * list({
 *   value: [
 *     'a',
 *     'b',
 *     'c',
 *     '123',
 *   ],
 * });
 * ```
 */
const list = (
  {
    /** The list array */
    value = [],
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFItems: [...value],
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  value: WFAction.WFWorkflowActionParameters.WFItems as Options['value'],
});

list.identifier = identifier;
list.invert = invert;

export default withActionOutput(list);
