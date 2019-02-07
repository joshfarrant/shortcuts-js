import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
    name,
    show = false,
  }: {
    /** The name of the shortcut to run */
    name: string,
    /** Whether to show the shortcut while it runs */
    show?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.runworkflow',
  WFWorkflowActionParameters: {
    WFWorkflowName: name,
    WFShowWorkflow: show,
  },
});

export default withActionOutput(runShortcut);
