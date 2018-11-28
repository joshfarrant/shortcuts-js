/** @module actions */

import { withActionOutput } from '../utils';

import WFCountType from '../interfaces/WF/WFCountType';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type CountOptions = {
  type?: WFCountType;
};

/**
 * Count Action. Counts the number of items, characters, words, sentences, or lines passed as input.
 * @param {Object} options
 * @param {WFCountType} [options.type='Items']
 */
const count = (
  {
    type = 'Items',
  }: CountOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.count',
  WFWorkflowActionParameters: {
    WFCountType: type,
  },
});

export default withActionOutput(count);
