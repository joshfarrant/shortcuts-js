import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Maps URL
 * @section Actions > Location > Maps
 * @icon Maps
 *
 * Creates a URL to search for the location, place, or text that was passed into the action in a separate maps app.
 *
 * ```js
 * getMapsURL();
 * ```
 */

const getMapsURL = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getmapslink',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getMapsURL);
