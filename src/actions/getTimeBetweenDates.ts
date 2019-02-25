import { withActionOutput } from '../utils/withActionOutput';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFTimeUntilUnit from '../interfaces/WF/WFTimeUntilUnit';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  unit?: WFSerialization | WFTimeUntilUnit;
  date?: WFSerialization | string;
}

const identifier = 'is.workflow.actions.gettimebetweendates';

/**
 * @action Get Time Between Dates
 * @section Content Types > Calendar > Dates
 * @icon Date
 *
 * Subtracts the specified date from the date passed into the action. For example, this action could get the number of minutes from now until a calendar event passed in as input.
 *
 * ```js
 * getTimeBetweenDates({
 *   unit: 'Days',
 *   date: '3/5/2011 5:45pm',
 * });
 * ```
 */
const getTimeBetweenDates = (
  {
    /** The unit of time for the result. Defaults to 'Minutes' */
    unit = 'Minutes',
    /** The date/time to calculate the difference from. Defaults to empty string */
    date = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFTimeUntilUnit: unit,
    ...(date !== '' && { WFTimeUntilReferenceDate: 'Other', WFTimeUntilCustomDate: date }),
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  unit: WFAction.WFWorkflowActionParameters.WFTimeUntilUnit,
  ...(WFAction.WFWorkflowActionParameters.WFTimeUntilCustomDate && {
    date: WFAction.WFWorkflowActionParameters.WFTimeUntilCustomDate,
  }),
});

getTimeBetweenDates.identifier = identifier;
getTimeBetweenDates.invert = invert;

export default withActionOutput(getTimeBetweenDates);
