import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

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
    volume = 50,
  }: {
    /** Number between 0 & 100 to set the volume to */
    volume ?: number,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.setvolume',
  WFWorkflowActionParameters: {
    WFVolume: volume / 100,
  },
});

export default setVolume;
