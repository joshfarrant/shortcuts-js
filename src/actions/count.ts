import { withActionOutput } from '../utils/withActionOutput';

import WFCountType from '../interfaces/WF/WFCountType';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  type?: WFCountType;
}

const identifier = 'is.workflow.actions.count';

/**
 * @action Count
 * @section Actions > Scripting > Content
 * @icon Calculator
 *
 * Counts the number of items, characters, words, sentences, or lines passed as input.
 *
 * ```js
 * count({
 *   // Count the number of lines in the input
 *   type: 'Lines',
 * });
 * ```
 */

const count = (
  {
    /** The thing to count */
    type = 'Items',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFCountType: type,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  type: WFAction.WFWorkflowActionParameters.WFCountType,
});

count.identifier = identifier;
count.invert = invert;

export default withActionOutput(count);
