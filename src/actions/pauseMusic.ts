/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Pause Music Action. Pauses the currently playing music.
 *
 * ```js
 * pauseMusic();
 * ```
 */

const pauseMusic = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.pausemusic',
  WFWorkflowActionParameters: {},
});

export default pauseMusic;
