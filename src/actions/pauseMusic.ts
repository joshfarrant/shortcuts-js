import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Pause Music
 * @section Actions > Music > Playback
 * @icon Pause
 *
 * Pauses the currently playing music.
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
