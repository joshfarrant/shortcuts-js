/** @module actions */

import { withUUID } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type RunShortcutOptions = {
  name: string;
  show?: boolean;
};

/**
 * Run Shortcut Action. Run a shortcut from your shortcut.
 * @param {Object} options
 * @param {string} options.name
 * @param {boolean} [options.show=false]
 */
const runShortcut = (
  {
    name,
    show = false,
  }: RunShortcutOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.runworkflow',
  WFWorkflowActionParameters: {
    WFWorkflowName: name,
    WFShowWorkflow: show,
  },
});

export default withUUID(runShortcut);
