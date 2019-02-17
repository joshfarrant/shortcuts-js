import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.pausemusic';

/**
 * @action Pause Music
 * @section Content Types > Music > Playback
 * @icon Pause
 *
 * Pauses the currently playing music.
 *
 * ```js
 * pauseMusic();
 * ```
 */
const pauseMusic = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

pauseMusic.identifier = identifier;
pauseMusic.invert = invert;

export default pauseMusic;
