import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Extract Archive Action. Extracts files from the archive passed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab, and iso archives.
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
