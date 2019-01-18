/** @module actions */

import { withActionOutput } from '../utils';

import WFDateActionMode from '../interfaces/WF/WFDateActionMode';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Date Action. Passes the specified date and time to the next action.
 *
 * ```js
 * date({
 *   use: 'Specified Date',
 *   date: 'Tomorrow',
 * });
 * ```
 */
const date = (
  options: {
    /** The type of date to use */
    use?: WFSerialization | WFDateActionMode;
    /** Custom date string to be parsed */
    date?: WFSerialization | string;
  },
): WFWorkflowAction => {
  const {
    use = 'Current Date',
    date = '29 June 2007',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.date',
    WFWorkflowActionParameters: {
      WFDateActionMode: use,
      ...(use === 'Specified Date' && { WFDateActionDate: date }),
    },
  };
};

export default withActionOutput(date);
