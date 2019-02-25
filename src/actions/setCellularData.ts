import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  value?: boolean;
}

const identifier = 'is.workflow.actions.cellulardata.set';

/**
 * @action Set Cellular Data
 * @section Actions > Scripting > Device
 * @icon CellularData
 *
 * Sets the device’s Cellular Data to on or off.
 *
 * ```js
 * setCellularData({
 *   value: true,
 * });
 * ```
 */
const setCellularData = (
  {
    /** Enable or disable cellular data */
    value = true,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    OnValue: value,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  value: WFAction.WFWorkflowActionParameters.OnValue,
});

setCellularData.identifier = identifier;
setCellularData.invert = invert;

export default setCellularData;
