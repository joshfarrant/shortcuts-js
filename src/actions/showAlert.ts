import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Show Alert Action. Shows an alert with an optional cancel button.
 *
 * ```js
 * showAlert({
 *   title: 'Alert',
 *   message: 'Do you want to continue?',
 *   showCancelButton: true,
 * });
 * ```
 */
const showAlert = (
  options: {
    /** The title of the alert */
    title?: WFSerialization | string,

    /** The message of the alert */
    message?: WFSerialization | string,

    /** Whether a cancel button should be shown */
    showCancelButton?: boolean,
  },
): WFWorkflowAction => {
  const {
    title = 'Alert',
    message = 'Do you want to continue?',
    showCancelButton = true,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.alert',
    WFWorkflowActionParameters: {
      WFAlertActionTitle: title,
      WFAlertActionMessage: message,
      WFAlertActionCancelButtonShown: showCancelButton,
    },
  };
};

export default withActionOutput(showAlert);
