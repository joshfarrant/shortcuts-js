import { withActionOutput } from '../utils/withActionOutput';

import Variable from '../interfaces/Variable';
import WFBase64LineBreakMode from '../interfaces/WF/WFBase64LineBreakMode';
import WFEncodeMode from '../interfaces/WF/WFEncodeMode';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  encodeMode?: WFEncodeMode;
  lineBreakMode?: Variable | WFBase64LineBreakMode;
}

const identifier = 'is.workflow.actions.base64encode';

/**
 * @action Base64 Encode
 * @section Actions > Scripting > Files
 * @icon Scripting
 *
 * Encodes or decodes text or files using Base64 encoding.
 *
 * ```js
 * base64Encode({
 *   encodeMode: 'Encode',
 *   lineBreakMode: 'Every 76 Characters',
 * });
 * ```
 */
const base64Encode = (
  {
    /** The encoding mode to use */
    encodeMode = 'Encode',
    /** The line break mode to use */
    lineBreakMode = 'Every 76 Characters',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFEncodeMode: encodeMode,
    WFBase64LineBreakMode: lineBreakMode,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  encodeMode: WFAction.WFWorkflowActionParameters.WFEncodeMode,
  lineBreakMode: WFAction.WFWorkflowActionParameters.WFBase64LineBreakMode as WFBase64LineBreakMode,
});

base64Encode.identifier = identifier;
base64Encode.invert = invert;

export default withActionOutput(base64Encode);
