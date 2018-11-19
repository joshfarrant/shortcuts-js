/** @module actions */

import { withUUID } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type GetNameOptions = {};

/**
 * Get Name Action. Returns the name of every item passed as input. Depending on the input, this could be a filename, the title of a website, the title of a calendar event, etc.
 * @param {Object} [options]
 */
const getName = (
  {}: GetNameOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getitemname',
  WFWorkflowActionParameters: {},
});

export default withUUID(getName);
