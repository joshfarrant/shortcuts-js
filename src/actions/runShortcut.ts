import { withUUID } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Run Shortcut Action. Run a shortcut from your shortcut.
 *
 * ```js
 * runShortcut({
 *   name: 'My Great Shortcut',
 *   show: true,
 * });
 * ```
 */
const runShortcut = (
  options: {
    /** The name of the shortcut to run */
    name: string,
    /** Whether to show the shortcut while it runs */
    show?: boolean,
  },
): WFWorkflowAction => {
  const {
    name,
    show = false,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.runworkflow',
    WFWorkflowActionParameters: {
      WFWorkflowName: name,
      WFShowWorkflow: show,
    },
  };
};

export default withUUID(runShortcut);
