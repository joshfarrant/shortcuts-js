import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Set Volume
 * @section Actions > Scripting > Device
 * @section Content Types > Music > Playback
 * @icon Sound
 *
 * Sets the system volume.
 *
 * ```js
 * setVolume({
 *    volume: 50,
 * });
 * ```
 */

const setVolume = (
  options: {
    /** The volume percentage value from 0 to 100 */
    volume?: number,
  },
): WFWorkflowAction => {
  const {
    volume = 50,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.setvolume',
    WFWorkflowActionParameters: {
      WFVolume: volume / 100,
    },
  };
};

export default setVolume;
