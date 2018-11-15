/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

import WFSerialization from '../interfaces/WF/WFSerialization';

type ShowResultOptions = {
  text?: WFSerialization | string;
};

/**
 * Show Result Action. Shows the specified text in Siri or in an alert.
 * @param {Object} options
 * @param {string} [options.text='']
 */
const showResult = (
  {
    text = '',
  }: ShowResultOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.showresult',
  WFWorkflowActionParameters: {
    Text: text,
  },
});

export default showResult;
