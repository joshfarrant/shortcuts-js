import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Text from Input
 * @section Content Types > Text >
 * @icon Text
 *
 * Returns text from the previous action's output. For example, this action can get the name of a photo or song, or the text of a web page.
 *
 * ```js
 * getTextFromInput();
 * ```
 */

const getTextFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.text',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getTextFromInput);
