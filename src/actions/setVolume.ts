import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  volume?: number;
}

const identifier = 'is.workflow.actions.setvolume';

/**
 * @action Set Volume
 * @section Content Types > Music > Playback
 * @icon Sound
 *
 * Sets the system volume.
 *
 * ```js
 *  setVolume({
 *    volume: 50,
 * });
 * ```
 */
const setVolume = (
  {
    /** Number between 0 and 100 to set the volume to */
    volume = 50,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFVolume: volume / 100,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  volume: (WFAction.WFWorkflowActionParameters.WFVolume as number) * 100,
});

setVolume.identifier = identifier;
setVolume.invert = invert;

export default setVolume;
