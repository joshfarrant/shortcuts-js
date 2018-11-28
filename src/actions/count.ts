import { withActionOutput } from '../utils';

import WFCountType from '../interfaces/WF/WFCountType';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Count Action. Counts the number of items, characters, words, sentences, or lines passed as input.
 *
 * ```js
 * count({
 *   // Count the number of lines in the input
 *   type: 'Lines',
 * });
 * ```
 */
const count = (
  options: {
    /** The thing to count */
    type?: WFCountType;
  },
): WFWorkflowAction => {
  const {
    type = 'Items',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.count',
    WFWorkflowActionParameters: {
      WFCountType: type,
    },
  };
};

export default withActionOutput(count);
