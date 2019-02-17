import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.unzip';

/**
 * @action Extract Archive
 * @section Content Types > Documents > Archives
 * @icon Documents
 *
 * Extracts files from the archive passed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab, and iso archives.
 *
 * ```js
 * extractArchive();
 * ```
 */
const extractArchive = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

extractArchive.identifier = identifier;
extractArchive.invert = invert;

export default extractArchive;
