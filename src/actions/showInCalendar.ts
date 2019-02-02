import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Show in Calendar
 * @section Actions > Calendar > Calendar
 * @icon Calendar
 *
 * Shows the date or calendar event passed as input in the Calendar app.
 *
 * ```js
 * showInCalendar();
 * ```
 */

const showInCalendar = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.showincalendar',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(showInCalendar);
