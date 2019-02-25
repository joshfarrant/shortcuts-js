import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  title?: WFSerialization | string;
  message?: WFSerialization | string;
  showCancelButton?: boolean;
}

const identifier = 'is.workflow.actions.alert';

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
  {
    /** The title of the alert */
    title = 'Alert',
    /** The message of the alert */
    message = 'Do you want to continue?',
    /** Whether a cancel button should be shown */
    showCancelButton = true,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFAlertActionTitle: title,
    WFAlertActionMessage: message,
    WFAlertActionCancelButtonShown: showCancelButton,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  title: WFAction.WFWorkflowActionParameters.WFAlertActionTitle,
  message: WFAction.WFWorkflowActionParameters.WFAlertActionMessage,
  showCancelButton: WFAction.WFWorkflowActionParameters.WFAlertActionCancelButtonShown,
});

showAlert.identifier = identifier;
showAlert.invert = invert;

export default showAlert;
