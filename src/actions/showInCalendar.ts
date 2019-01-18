/** @module actions */

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Show in Calendar Action. Shows the date or calendar event passed as input in the Calendar app.
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
