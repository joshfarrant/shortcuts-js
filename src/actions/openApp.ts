import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Open the specified app using a bundle id.
 *
 * ```js
 * openApp({
 *   appID: "com.christianselig.Apollo"
 * });
 * ```
 */

const openApp = (
  options: {
    appID?: string;
  },
): WFWorkflowAction => {
  const {
    appID = 'com.christianselig.Apollo',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.openapp',
    WFWorkflowActionParameters: {
      WFAppIdentifier: appID,
    },
  };
};

export default openApp;
