/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type SetAirplaneModeOptions = {
  value?: boolean;
};

/**
 * Set Airplane Mode Action. Sets the device's Airplane Mode to on or off.
 * @param {Object} options
 * @param {boolean} [options.value=true]
 */
const setAirplaneMode = (
  {
    value = true,
  }: SetAirplaneModeOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.airplanemode.set',
  WFWorkflowActionParameters: {
    OnValue: value,
  },
});

export default setAirplaneMode;
