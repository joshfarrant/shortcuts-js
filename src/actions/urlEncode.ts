import { withActionOutput } from '../utils';

import WFEncodeMode from '../interfaces/WF/WFEncodeMode';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action URL Encode
 * @section Actions > Scripting > X-Callback
 * @icon URL
 *
 * Encodes or decodes text passed into the action to be suitable for inclusion in a URL by adding or removing percent escapes when appropriate.
 *
 * ```js
 * URLEncode({
 *   encodeMode: 'Encode',
 * });
 * ```
 */

const URLEncode = (
  {
    encodeMode = 'Encode',
  }: {
    /** The encoding mode to use */
    encodeMode?: WFEncodeMode,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.urlencode',
  WFWorkflowActionParameters: {
    WFEncodeMode: encodeMode,
  },
});

export default withActionOutput(URLEncode);
