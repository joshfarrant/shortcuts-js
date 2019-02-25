import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  name: string;
  show?: boolean;
}

const identifier = 'is.workflow.actions.runworkflow';

/**
 * @action Run Shortcut
 * @section Actions > Scripting > Shortcuts
 * @icon Shortcuts
 *
 * Run a shortcut from your shortcut.
 *
 * ```js
 * runShortcut({
 *   name: 'My Great Shortcut',
 *   show: true,
 * });
 * ```
 */
const runShortcut = (
  {
    /** The name of the shortcut to run */
    name,
    /** Whether to show the shortcut while it runs */
    show = false,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFWorkflowName: name,
    WFShowWorkflow: show,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  name: WFAction.WFWorkflowActionParameters.WFWorkflowName as string,
  show: WFAction.WFWorkflowActionParameters.WFShowWorkflow,
});

runShortcut.identifier = identifier;
runShortcut.invert = invert;

export default withActionOutput(runShortcut);
