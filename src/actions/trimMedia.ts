import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Trim Media
 * @section Content Types > Photos & Video > Video
 * @icon QuickTime
 *
 * Presents a view allowing you to trim the media passed into the action.
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
