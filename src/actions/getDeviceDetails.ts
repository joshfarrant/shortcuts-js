import { withActionOutput } from '../utils';

import WFDeviceDetail from '../interfaces/WF/WFDeviceDetail';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Device Details Action. Gets information about the current device.
 *
 * ```js
 * getDeviceDetails({
 *   detail: 'Device Name',
 * });
 * ```
 */
const getDeviceDetails = (
  options: {
    /** The particular detail to retrieve */
    detail?: WFSerialization | WFDeviceDetail,
  },
): WFWorkflowAction => {
  const {
    detail = 'Device Name',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.getdevicedetails',
    WFWorkflowActionParameters: {
      WFDeviceDetail: detail,
    },
  };
};

export default withActionOutput(getDeviceDetails);
