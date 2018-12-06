import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Extract Archive Action. Extracts files from the archive passed as input.
 *
 * ```js
 * extractArchive();
 * ```
 */

const extractArchive = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.unzip',
  WFWorkflowActionParameters: {},
});

export default extractArchive;
