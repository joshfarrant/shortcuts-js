/** @module actions */

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get My Shortcuts Action. Gets the shortcuts stored on this device. For example, you could use this action with the Make Archive action to zip up your shortcuts.
 *
 * ```js
 * getMyShortcuts();
 * ```
 */
const getMyShortcuts = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getmyworkflows',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getMyShortcuts);
