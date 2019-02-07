import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Set Name
 * @section Actions > Scripting > Content
 * @icon Scripting
 *
 * Sets the name of the item passed as input.
 *
 * ```js
 * setName({
 *   name: 'Test',
 *   dontIncludeFileExtension: true,
 * });
 * ```
 */

const setName = (
  {
    name,
    dontIncludeFileExtension = false,
  }: {
    /** The name to set */
    name: string,
    /** Whether to include file extension */
    dontIncludeFileExtension?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.setitemname',
  WFWorkflowActionParameters: {
    WFName: name,
    WFDontIncludeFileExtension: dontIncludeFileExtension,
    Advanced: dontIncludeFileExtension,
  },
});

export default withActionOutput(setName);
