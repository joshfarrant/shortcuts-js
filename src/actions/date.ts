import { withActionOutput } from '../utils';

import WFDateActionMode from '../interfaces/WF/WFDateActionMode';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Passes the specified date and time to the next action.
 *
 * ```js
 * date({
 *   use: 'Specified Date',
 *   date: 'Tomorrow',
 * });
 * ```
 *
 * @action Date
 * @section Content Types > Calendar > Dates
 * @icon Date
 */
const date = (
  {
    /** The type of date to use */
    use = 'Current Date',
    /** Custom date string to be parsed */
    date = '29 June 2007',
  }: {
    use?: WFSerialization | WFDateActionMode;
    date?: WFSerialization | string;
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.date',
  WFWorkflowActionParameters: {
    WFDateActionMode: use,
    ...(use === 'Specified Date' && { WFDateActionDate: date }),
  },
});

export default withActionOutput(date);
