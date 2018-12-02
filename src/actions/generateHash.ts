import { withActionOutput } from '../utils';

import WFHashType from '../interfaces/WF/WFHashType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Generate Hash Action. Create a hash (MD5, etc) of incoming content.
 *
 * ```js
 * generateHash({
 *   type: 'MD5'
 * });
 * ```
 */
const generateHash = (
  options: {
    /** The type of hash to use */
    type?: WFSerialization | WFHashType,
  },
): WFWorkflowAction => {
  const {
    type = 'MD5',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.hash',
    WFWorkflowActionParameters: {
      WFHashType: type,
    },
  };
};

export default withActionOutput(generateHash);
