import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getmapslink';

/**
 * @action Get Maps URL
 * @section Content Types > Location > Maps
 * @icon Maps
 *
 * Creates a URL to search for the location, place, or text that was passed into the action in a separate maps app.
 *
 * ```js
 * getMapsURL();
 * ```
 */
const getMapsURL = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getMapsURL.identifier = identifier;
getMapsURL.invert = invert;

export default withActionOutput(getMapsURL);
