import { withActionOutput } from '../utils/withActionOutput';

import WFDateActionMode from '../interfaces/WF/WFDateActionMode';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  use?: WFSerialization | WFDateActionMode;
  date?: WFSerialization | string;
}

const identifier = 'is.workflow.actions.date';

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
const date = (
  {
    /** The type of date to use */
    use = 'Current Date',
    /** Custom date string to be parsed */
    date = '29 June 2007',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFDateActionMode: use,
    ...(use === 'Specified Date' && { WFDateActionDate: date }),
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  use: WFAction.WFWorkflowActionParameters.WFDateActionMode,
  ...(WFAction.WFWorkflowActionParameters.WFDateActionMode === 'Specified Date' && {
    date: WFAction.WFWorkflowActionParameters.WFDateActionDate,
  }),
});

date.identifier = identifier;
date.invert = invert;

export default withActionOutput(date);
