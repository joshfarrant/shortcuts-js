import { withUUID } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Type Action. Returns the type of every item passed as input. For example, if a URL is passed, this action will return URL.
 *
 * ```js
 * getType();
 * ```
 */
const getType = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getitemtype',
  WFWorkflowActionParameters: {},
});

export default withUUID(getType);
