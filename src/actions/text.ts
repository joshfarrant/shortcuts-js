/** @module actions */

import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type TextOptions = {
  text?: WFSerialization | string;
};

/**
 * Text Action. Passes the specified text to the next action.
 * @param {Object} options
 * @param {string} [options.text='']
 */
const text = (
  {
    text = '',
  }: TextOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.gettext',
  WFWorkflowActionParameters: {
    WFTextActionText: text,
  },
});

export default withActionOutput(text);
