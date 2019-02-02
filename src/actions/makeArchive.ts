import { withActionOutput } from '../utils';

import WFArchiveFormat from '../interfaces/WF/WFArchiveFormat';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Make Archive
 * @section Actions > Documents > Archives
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
  options: {
    /** The operation to perform */
    format?: WFArchiveFormat,
    /** Set the name of the Archive */
    name?: WFSerialization | string,
  },
): WFWorkflowAction => {
  const {
    format = 'zip',
    name = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.makezip',
    WFWorkflowActionParameters: {
      WFArchiveFormat: format,
      WFZIPName: name,
    },
  };
};

export default withActionOutput(makeArchive);
