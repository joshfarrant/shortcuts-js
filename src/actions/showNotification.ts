import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';
/*
{
    "WFWorkflowActionIdentifier": "is.workflow.actions.notification",
    "WFWorkflowActionParameters": {
        "WFNotificationActionTitle": "Hi"
    }
}
*/

const showNotification = (
  options: {
    /* Title for the notification */
    title ?: string,
  },
): WFWorkflowAction => {
  const {
    title = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.notification',
    WFWorkflowActionParameters: {
      WFNotificationActionTitle: title,
    },
  };
};

export default showNotification;
