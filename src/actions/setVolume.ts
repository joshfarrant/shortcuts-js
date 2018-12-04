import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set Volume Action. Sets the system volume.
 *
 * ```js
 *  setVolume({
 *    volume: 0.5,
 * });
 * ```
 */

const setVolume = (
  options: {
    /** Number between 0 & 1 to set the volume to */
    volume ?: number,
  },
): WFWorkflowAction => {
  const {
    volume = 0.5,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.setvolume',
    WFWorkflowActionParameters: {
      WFVolume: volume,
    },
  };
};

export default setVolume;
