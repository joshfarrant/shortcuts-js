import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.share';

/**
 * @action Share
 * @section Content Types > Sharing > System
 * @icon Sharing
 *
 * Prompts to share the input.
 *
 * ```js
 * share();
 * ```
 */
const share = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

share.identifier = identifier;
share.invert = invert;

export default share;
