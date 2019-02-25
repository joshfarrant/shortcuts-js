import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  appId?: string;
}

const identifier = 'is.workflow.actions.openapp';

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
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFAppIdentifier: appId,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  appId: WFAction.WFWorkflowActionParameters.WFAppIdentifier,
});

openApp.identifier = identifier;
openApp.invert = invert;

export default openApp;
