import { withActionOutput } from '../utils';

import Variable from '../interfaces/Variable';
import WFBase64LineBreakMode from '../interfaces/WF/WFBase64LineBreakMode';
import WFEncodeMode from '../interfaces/WF/WFEncodeMode';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Base 64 Encode Action. Encodes or decodes text or files using Base64
 * encoding.
 *
 * ```js
 * base64Encode({
 *   encodeMode: 'Encode',
 *   lineBreakMode: 'Every 76 Characters',
 * });
 * ```
 */
const base64Encode = (
  options: {
    /** The encoding mode to use */
    encodeMode?: WFEncodeMode,
    /** The line break mode to use */
    lineBreakMode?: Variable | WFBase64LineBreakMode,
  },
): WFWorkflowAction => {
  const {
    encodeMode = 'Encode',
    lineBreakMode = 'Every 76 Characters',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.base64encode',
    WFWorkflowActionParameters: {
      WFEncodeMode: encodeMode,
      WFBase64LineBreakMode: lineBreakMode,
    },
  };
};

export default withActionOutput(base64Encode);
