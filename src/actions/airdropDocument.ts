import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Airdrop Action. Promptsto share the input via AirDrop.
 *
 * ```js
 * airdropDocument();
 * ```
 */

const airdropDocument = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.airdropdocument',
  WFWorkflowActionParameters: {},
});

export default airdropDocument;
