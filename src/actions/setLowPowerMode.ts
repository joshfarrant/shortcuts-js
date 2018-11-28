import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set Low Power Mode Action. Sets the device's Low Power Mode to on or off.
 *
 * ```js
 * setLowPowerMode({
 *   value: false,
 * });
 * ```
 */
const setLowPowerMode = (
  options: {
    /** Enable or disable low power mode */
    value?: boolean,
  },
): WFWorkflowAction => {
  const {
    value = true,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.lowpowermode.set',
    WFWorkflowActionParameters: {
      OnValue: value,
    },
  };
};

export default setLowPowerMode;
