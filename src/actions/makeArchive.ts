import { withActionOutput } from '../utils/withActionOutput';

import WFArchiveFormat from '../interfaces/WF/WFArchiveFormat';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Make Archive
 * @section Content Types > Documents > Archives
 * @icon Documents
 *
 * Makes an archive out of the files passed as input. Supports creating zip, tar.gz, tar.bz2, tar, gzip, cpio, or iso archives.
 *
 * ```js
 * makeArchive({
 *   format: '.zip',
 *   name: 'zipName',
 * });
 * ```
 */

const makeArchive = (
  {
    format = 'zip',
    name = '',
  }: {
    /** The operation to perform */
    format?: WFArchiveFormat,
    /** Set the name of the Archive */
    name?: WFSerialization | string,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.makezip',
  WFWorkflowActionParameters: {
    WFArchiveFormat: format,
    WFZIPName: name,
  },
});

export default withActionOutput(makeArchive);
