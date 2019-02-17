import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.detect.text';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getTextFromInput.identifier = identifier;
getTextFromInput.invert = invert;

export default withActionOutput(getTextFromInput);
