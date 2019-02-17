import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getnameofemoji';

/**
 * @action Get Name of Emoji
 * @section Content Types > Text >
 * @icon Smiley
 *
 * Gets the names of emoji passed into the action.
 *
 * ```js
 * getNameOfEmoji();
 * ```
 */
const getNameOfEmoji = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getNameOfEmoji.identifier = identifier;
getNameOfEmoji.invert = invert;

export default withActionOutput(getNameOfEmoji);
