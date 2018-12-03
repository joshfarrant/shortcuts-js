import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set setWiFi Action. Sets the device's Wi-Fi to on or off.
 *
 * ```js
 * setWiFi({
 *   value: true,
 * });
 * ```
 */
const setWiFi = (
  options: {
    /** Enable or disable Wi-Fi */
    value?: boolean,
  },
): WFWorkflowAction => {
  const {
    value = true,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.wifi.set',
    WFWorkflowActionParameters: {
      OnValue: value,
    },
  };
};

export default setWiFi;
