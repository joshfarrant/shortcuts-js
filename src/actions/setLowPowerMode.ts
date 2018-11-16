/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type SetLowPowerModeOptions = {
  value?: boolean;
};

/**
 * Set Low Power Mode Action. Sets the device's Low Power Mode to on or off.
 * @param {Object} options
 * @param {boolean} [options.value=true]
 */
const setLowPowerMode = (
  {
    value = true,
  }: SetLowPowerModeOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.lowpowermode.set',
  WFWorkflowActionParameters: {
    OnValue: value,
  },
});

export default setLowPowerMode;
