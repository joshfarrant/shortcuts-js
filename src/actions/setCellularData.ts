import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set setCellularData Action. Sets the device's cellular data to on or off.
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
