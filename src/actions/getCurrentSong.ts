import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getcurrentsong';

/**
 * @action Get Current Song
 * @section Content Types > Music > Music
 * @icon Music
 *
 * Returns the song that is currently playing in the Music app, if any.
 *
 * ```js
 * getCurrentSong();
 * ```
 */
const getCurrentSong = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getCurrentSong.identifier = identifier;
getCurrentSong.invert = invert;

export default getCurrentSong;
