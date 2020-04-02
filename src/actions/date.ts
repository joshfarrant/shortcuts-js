import { withActionOutput } from '../utils';

import WFDateActionMode from '../interfaces/WF/WFDateActionMode';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Date
 * @section Content Types > Calendar > Dates
 * @icon Date
 *
 * Passes the specified date and time to the next action.
 *
 * ```js
 * date({
 *   use: 'Specified Date',
 *   date: 'Tomorrow',
 * });
 * ```
 */

const dateAction = (
  {
    use = 'Current Date',
    date = '29 June 2007',
  }: {
    /** The type of date to use */
    use?: WFSerialization | WFDateActionMode;
    /** Custom date string to be parsed */
    date?: WFSerialization | string;
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.date',
  WFWorkflowActionParameters: {
    WFDateActionMode: use,
    ...(use === 'Specified Date' && { WFDateActionDate: date }),
  },
});

export default withActionOutput(dateAction);
