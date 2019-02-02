import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Current Song
 * @section Actions > Music > Music
 * @icon Music
 *
 * Returns the song that is currently playing in the Music app, if any.
 *
 * ```js
 * getCurrentSong();
 * ```
 */

const getCurrentSong = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getcurrentsong',
  WFWorkflowActionParameters: {},
});

export default getCurrentSong;
