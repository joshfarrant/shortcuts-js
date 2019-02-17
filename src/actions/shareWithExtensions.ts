import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.runextension';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

shareWithExtensions.identifier = identifier;
shareWithExtensions.invert = invert;

export default shareWithExtensions;
