import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Post on Instagram Action. Opens the photo passed into this action in the Instagram app and copies the caption to the clipboard.
 *
 * ```js
 * postOnInstagram();
 * ```
 */
const postOnInstagram = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'com.burbn.instagram.openin',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(postOnInstagram);
