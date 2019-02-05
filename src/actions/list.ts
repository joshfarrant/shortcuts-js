import {
  withActionOutput,
} from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
    value = [],
  }: {
    /** The list array */
    value?: string[],
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.list',
  WFWorkflowActionParameters: {
    WFItems: [...value],
  },
});

export default withActionOutput(list);
