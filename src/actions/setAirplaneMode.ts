import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set Airplane Mode Action. Sets the device's Airplane Mode to on or off.
 *
 * ```js
 * setAirplaneMode({
 *   value: true,
 * });
 * ```
 */
const setAirplaneMode = (
  options: {
    /** Enable or disable airplane mode */
    value?: boolean,
  },
): WFWorkflowAction => {
  const {
    value = true,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.airplanemode.set',
    WFWorkflowActionParameters: {
      OnValue: value,
    },
  };
};

export default setAirplaneMode;
