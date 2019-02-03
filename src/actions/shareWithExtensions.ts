import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Share with Extensions
 * @section Content Types > Sharing > System
 * @icon Apps
 *
 * Prompts to share the input using action extensions and sharing extensions provided by other apps.
 *
 * ```js
 * shareWithExtensions();
 * ```
 */

const shareWithExtensions = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.runextension',
  WFWorkflowActionParameters: {},
});

export default shareWithExtensions;
