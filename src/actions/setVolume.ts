import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Sets the system volume.
 *
 * ```js
 * setVolume({
 *    volume: 50,
 * });
 * ```
 *
 * @action Set Volume
 * @section Actions > Scripting > Device
 * @section Content Types > Music > Playback
 * @icon Sound
 */

const setVolume = (
  {
    /** The volume percentage value from 0 to 100 */
    volume = 50,
  }: {
    volume?: number,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.setvolume',
  WFWorkflowActionParameters: {
    WFVolume: volume / 100,
  },
});

export default setVolume;
