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
  options: {
    /** Number between 0 & 100 to set the volume to */
    volume ?: number,
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
