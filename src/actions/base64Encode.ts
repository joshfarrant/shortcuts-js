import { withActionOutput } from '../utils';

import WFBase64LineBreakMode from '../interfaces/WF/WFBase64LineBreakMode';
import WFEncodeMode from '../interfaces/WF/WFEncodeMode';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Encodes or decodes text or files using Base64 encoding.
 *
 * ```js
 * base64Encode({
 *   encodeMode: 'Encode',
 *   lineBreakMode: 'Every 76 Characters',
 * });
 * ```
 *
 * @action Base64 Encode
 * @section Actions > Scripting > Files
 * @icon Scripting
 */
const base64Encode = (
  {
    /** The encoding mode to use */
    encodeMode = 'Encode',
    /** The line break mode to use */
    lineBreakMode = 'Every 76 Characters',
  }: {
    encodeMode?: WFEncodeMode,
    lineBreakMode?: WFSerialization | WFBase64LineBreakMode,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.base64encode',
  WFWorkflowActionParameters: {
    WFEncodeMode: encodeMode,
    WFBase64LineBreakMode: lineBreakMode,
  },
});

export default withActionOutput(base64Encode);
