import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.trimvideo';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

trimMedia.identifier = identifier;
trimMedia.invert = invert;

export default trimMedia;
