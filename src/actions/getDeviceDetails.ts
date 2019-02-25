import { withActionOutput } from '../utils/withActionOutput';

import WFDeviceDetail from '../interfaces/WF/WFDeviceDetail';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  detail?: WFSerialization | WFDeviceDetail;
}

const identifier = 'is.workflow.actions.getdevicedetails';

/**
 * @action Get Device Details
 * @section Actions > Scripting > Device
 * @icon Scripting
 *
 * Gets information about the current device.
 *
 * ```js
 * getDeviceDetails({
 *   detail: 'Device Name',
 * });
 * ```
 */
const getDeviceDetails = (
  {
    /** The particular detail to retrieve */
    detail = 'Device Name',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFDeviceDetail: detail,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  detail: WFAction.WFWorkflowActionParameters.WFDeviceDetail,
});

getDeviceDetails.identifier = identifier;
getDeviceDetails.invert = invert;

export default withActionOutput(getDeviceDetails);
