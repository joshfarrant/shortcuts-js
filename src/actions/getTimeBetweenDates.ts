import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFTimeUntilUnit from '../interfaces/WF/WFTimeUntilUnit';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Time Between Dates Action. Subtracts the specified date from the date passed
 * into the action. For example, this action could get the number of minutes from
 * now until a calendar event passed in as input.
 *
 * ```js
 * getTimeBetweenDates({
 *   unit: 'Days',
 *   date: '3/5/2011 5:45pm'
 * });
 * ```
 */
const getTimeBetweenDates = (
  options: {
    /** The unit of time for the result. Defaults to 'Minutes' */
    unit?: WFSerialization | WFTimeUntilUnit,
    /** The date/time to calculate the difference from. Defaults to empty string */
    date?: WFSerialization | string,
  },
): WFWorkflowAction => {
  const {
    unit = 'Minutes',
    date = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
    WFWorkflowActionParameters: {
      ...(unit !== 'Minutes' && { WFTimeUntilUnit: unit }),
      ...(date !== '' && { WFTimeUntilReferenceDate: 'Other', WFTimeUntilCustomDate: date }),
    },
  };
};

export default withActionOutput(getTimeBetweenDates);
