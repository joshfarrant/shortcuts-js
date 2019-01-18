/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Current Song Action. Returns the song that is currently playing in the Music app, if any.
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
