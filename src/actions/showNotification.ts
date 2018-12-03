import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Show Notification Action. Displays a local notification.
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
  options: {
    /** Title for the notification */
    title ?: string,
    /** Body for the notification */
    body ?: string,
    /** Enable or disable sound for the notification */
    sound ?: boolean,
  },
): WFWorkflowAction => {
  const {
    title = '',
    body = 'Hello World',
    sound = true,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.notification',
    WFWorkflowActionParameters: {
      WFNotificationActionTitle: title,
      WFNotificationActionBody: body,
      WFNotificationActionSound: sound,
    },
  };
};

export default showNotification;
