/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Open URL Action. Opens URLs passed into the action in Safari.
 *
 * ```js
 * openURLs();
 * ```
 */

const openURLs = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.openurl',
  WFWorkflowActionParameters: {},
});

export default openURLs;
