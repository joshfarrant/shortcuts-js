/** @module actions */

import { withUUID } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type SetNameOptions = {
  name: string;
  dontIncludeFileExtension?: boolean;
};

/**
 * Set Name Action. Sets the name of the item passed as input.
 * @param {Object} options
 * @param {string} options.name
 * @param {boolean} [options.dontIncludeFileExtension=false]
 */
const setName = (
  {
    name,
    dontIncludeFileExtension = false,
  }: SetNameOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.setitemname',
  WFWorkflowActionParameters: {
    WFName: name,
    WFDontIncludeFileExtension: dontIncludeFileExtension,
    Advanced: dontIncludeFileExtension,
  },
});

export default withUUID(setName);
