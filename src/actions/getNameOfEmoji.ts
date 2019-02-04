import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
  WFWorkflowActionIdentifier: 'is.workflow.actions.getnameofemoji',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getNameOfEmoji);
