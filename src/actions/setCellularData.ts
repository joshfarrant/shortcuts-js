/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set Cellular Data Action. Sets the device's Cellular Data to on or off.
 *
 * ```js
 * setCellularData({
 *   value: true,
 * });
 * ```
 */
const setCellularData = (
  options: {
    /** Enable or disable cellular data */
    value?: boolean,
  },
): WFWorkflowAction => {
  const {
    value = true,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.cellulardata.set',
    WFWorkflowActionParameters: {
      OnValue: value,
    },
  };
};

export default setCellularData;
