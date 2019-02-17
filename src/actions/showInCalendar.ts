import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.showincalendar';

/**
 * @action Show in Calendar
 * @section Content Types > Calendar > Calendar
 * @icon Calendar
 *
 * Shows the date or calendar event passed as input in the Calendar app.
 *
 * ```js
 * showInCalendar();
 * ```
 */
const showInCalendar = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

showInCalendar.identifier = identifier;
showInCalendar.invert = invert;

export default withActionOutput(showInCalendar);
