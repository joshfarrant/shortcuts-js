import { withActionOutput } from '../utils/withActionOutput';

import WFEncodeMode from '../interfaces/WF/WFEncodeMode';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  encodeMode?: WFEncodeMode;
}

const identifier = 'is.workflow.actions.urlencode';

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
    /** The encoding mode to use */
    encodeMode = 'Encode',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFEncodeMode: encodeMode,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  encodeMode: WFAction.WFWorkflowActionParameters.WFEncodeMode,
});

URLEncode.identifier = identifier;
URLEncode.invert = invert;

export default withActionOutput(URLEncode);
