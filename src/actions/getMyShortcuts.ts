import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get My Shortcuts
 * @section Actions > Scripting > Shortcuts
 * @icon Shortcuts
 *
 * Gets the shortcuts stored on this device. For example, you could use this action with the Make Archive action to zip up your shortcuts.
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
