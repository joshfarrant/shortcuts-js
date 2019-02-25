import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  title?: string;
  body?: string;
  sound?: boolean;
}

const identifier = 'is.workflow.actions.notification';

/**
 * @action Show Notification
 * @section Actions > Scripting > Notification
 * @icon Notification
 *
 * Displays a local notification.
 *
 * ```js
 * showNotification({
 *  title: 'Hello, World!',
 *  body: 'This is a test notification',
 *  sound: true,
 * });
 * ```
 */
const showNotification = (
  {
    /** Title for the notification */
    title = '',
    /** Body for the notification */
    body = 'Hello World',
    /** Enable or disable sound for the notification */
    sound = true,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFNotificationActionTitle: title,
    WFNotificationActionBody: body,
    WFNotificationActionSound: sound,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  title: WFAction.WFWorkflowActionParameters.WFNotificationActionTitle,
  body: WFAction.WFWorkflowActionParameters.WFNotificationActionBody,
  sound: WFAction.WFWorkflowActionParameters.WFNotificationActionSound,
});

showNotification.identifier = identifier;
showNotification.invert = invert;

export default showNotification;
