/** @module actions */

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Name of Emoji Action. Gets the names of emoji passed into the action.
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
