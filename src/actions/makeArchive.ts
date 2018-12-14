import { withActionOutput } from '../utils';

import WFArchiveFormat from '../interfaces/WF/WFArchiveFormat';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Make Archive Action. Makes an archive out of the files passed as input.
 *
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
