import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get URLs from Input
 * @section Content Types > Web > URLs
 * @icon URL
 *
 * Returns any links found in the output from the previous action.
 *
 * ```js
 * getURLsFromInput();
 * ```
 */

const getURLsFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.link',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getURLsFromInput);
