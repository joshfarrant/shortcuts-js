/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Trim Media Action. Presents a view allowing you to trim the media passed into the action.
 *
 * ```js
 * trimMedia();
 * ```
 */

const trimMedia = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.trimvideo',
  WFWorkflowActionParameters: {},
});

export default trimMedia;
