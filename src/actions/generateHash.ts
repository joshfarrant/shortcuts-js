import { withActionOutput } from '../utils/withActionOutput';

import WFHashType from '../interfaces/WF/WFHashType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  type?: WFSerialization | WFHashType;
}

const identifier = 'is.workflow.actions.hash';

/**
 * @action Generate Hash
 * @section Actions > Scripting > Files
 * @icon Scripting
 *
 * Generates a MD5/SHA1 hash from the input.
 *
 * ```js
 * generateHash({
 *   type: 'MD5',
 * });
 * ```
 */
const generateHash = (
  {
    /** The type of hash to use */
    type = 'MD5',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFHashType: type,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  type: WFAction.WFWorkflowActionParameters.WFHashType,
});

generateHash.identifier = identifier;
generateHash.invert = invert;

export default withActionOutput(generateHash);
