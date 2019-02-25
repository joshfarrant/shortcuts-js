import { withActionOutput } from '../utils/withActionOutput';

import WFArchiveFormat from '../interfaces/WF/WFArchiveFormat';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  format?: WFArchiveFormat;
  name?: WFSerialization | string;
}

const identifier = 'is.workflow.actions.makezip';

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
    /** The operation to perform */
    format = 'zip',
    /** Set the name of the Archive */
    name = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFArchiveFormat: format,
    WFZIPName: name,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  format: WFAction.WFWorkflowActionParameters.WFArchiveFormat,
  name: WFAction.WFWorkflowActionParameters.WFZIPName,
});

makeArchive.identifier = identifier;
makeArchive.invert = invert;

export default withActionOutput(makeArchive);
