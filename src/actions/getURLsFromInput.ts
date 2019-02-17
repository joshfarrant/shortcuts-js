import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.detect.link';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getURLsFromInput.identifier = identifier;
getURLsFromInput.invert = invert;

export default withActionOutput(getURLsFromInput);
