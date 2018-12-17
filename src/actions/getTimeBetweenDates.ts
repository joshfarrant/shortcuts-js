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

  const action: WFWorkflowAction = {
    WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
    WFWorkflowActionParameters: {},
  };

  // If left as 'Minutes' (default), it is not needed in the serialization
  if (unit !== 'Minutes') {
    action.WFWorkflowActionParameters.WFTimeUntilUnit = unit;
  }

  // If we have a custom date to start from, we need to set the reference to 'Other'
  // otherwise, don't serialize the default data since it's not necessary
  if (date !== '') {
    action.WFWorkflowActionParameters.WFTimeUntilReferenceDate = 'Other';
    action.WFWorkflowActionParameters.WFTimeUntilCustomDate = date;
  }

  return action;
};

export default withActionOutput(getTimeBetweenDates);
