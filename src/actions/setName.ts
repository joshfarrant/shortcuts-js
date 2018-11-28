import { withUUID } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set Name Action. Sets the name of the item passed as input.
 *
 * ```js
 * setName({
 *   name: 'Test',
 *   dontIncludeFileExtension: true,
 * });
 * ```
 */
const setName = (
  options: {
    /** The name to set */
    name: string,
    /** Whether to include file extension */
    dontIncludeFileExtension?: boolean,
  },
): WFWorkflowAction => {
  const {
    name,
    dontIncludeFileExtension = false,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.setitemname',
    WFWorkflowActionParameters: {
      WFName: name,
      WFDontIncludeFileExtension: dontIncludeFileExtension,
      Advanced: dontIncludeFileExtension,
    },
  };
};

export default withUUID(setName);
