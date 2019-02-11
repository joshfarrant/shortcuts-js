import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Open App
 * @section Content Types > Apps >
 * @icon Apps
 *
 * Opens the specified app.
 *
 * ```js
 * openApp({
 *   appId: 'com.christianselig.Apollo'
 * });
 * ```
 */

const openApp = (
  {
    appId = '',
  }: {
    /** The App identifier */
    appId?: string;
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.openapp',
  WFWorkflowActionParameters: {
    WFAppIdentifier: appId,
  },
});

export default openApp;
