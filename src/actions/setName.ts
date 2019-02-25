import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  name: string;
  dontIncludeFileExtension?: boolean;
}

const identifier = 'is.workflow.actions.setitemname';

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
    /** The name to set */
    name,
    /** Whether to include file extension */
    dontIncludeFileExtension = false,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFName: name,
    WFDontIncludeFileExtension: dontIncludeFileExtension,
    Advanced: dontIncludeFileExtension,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  name: WFAction.WFWorkflowActionParameters.WFName || '',
  dontIncludeFileExtension: WFAction.WFWorkflowActionParameters.WFDontIncludeFileExtension,
});

setName.identifier = identifier;
setName.invert = invert;

export default withActionOutput(setName);
