import { withActionOutput } from '../utils';

import WFEncodeMode from '../interfaces/WF/WFEncodeMode';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * URL Encode Action. Encodes or decodes text passed into the action to be suitable for inclusion in
 * a URL by adding or removing percent escapes when appropriate.
 *
 * ```js
 * URLEncode({
 *   encodeMode: 'Encode',
 * });
 * ```
 */
const URLEncode = (
  options: {
    /** The encoding mode to use */
    encodeMode?: WFEncodeMode,
  },
): WFWorkflowAction => {
  const {
    encodeMode = 'Encode',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.urlencode',
    WFWorkflowActionParameters: {
      WFEncodeMode: encodeMode,
    },
  };
};

export default withActionOutput(URLEncode);
