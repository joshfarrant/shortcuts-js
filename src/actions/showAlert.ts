import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Show Alert
 * @section Actions > Scripting > Notification
 * @icon Scripting
 *
 * Displays an alert with a title, a message, and two buttons. If the user selects the OK button, the shortcut continues. The cancel button stops the shortcut.
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

export default showAlert;
