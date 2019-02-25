import { withActionOutput } from '../utils/withActionOutput';

import WFCellularDetail from '../interfaces/WF/WFCellularDetail';
import WFNetworkDetailsNetwork from '../interfaces/WF/WFNetworkDetailsNetwork';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWiFiDetail from '../interfaces/WF/WFWiFiDetail';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  network?: WFNetworkDetailsNetwork;
  attribute?: WFSerialization | WFWiFiDetail | WFCellularDetail;
}

const identifier = 'is.workflow.actions.getwifi';

/**
 * @action Get Network Details
 * @section Actions > Scripting > Device
 * @icon Wi-Fi
 *
 * Gets information about the currently connected networks.
 *
 * ```js
 * getNetworkDetails({
 *   network: 'Wi-Fi',
 *   get: 'Network Name',
 * });
 *
 * getNetworkDetails({
 *   network: 'Cellular',
 *   get: 'Carrier Name',
 * });
 * ```
 */
const getNetworkDetails = (
  {
    /** The type of network to look at */
    network = 'Wi-Fi',
    /** The particular network detail to retrieve */
    attribute = 'Network Name',
  }: Options,
): WFWorkflowAction => {
  let detailKey = 'WFWiFiDetail';
  if (network === 'Cellular') {
    detailKey = 'WFCellularDetail';
  }

  return {
    WFWorkflowActionIdentifier: identifier,
    WFWorkflowActionParameters: {
      WFNetworkDetailsNetwork: network,
      [detailKey]: attribute,
    },
  };
};

const invert = (
  WFAction: WFWorkflowAction,
): Options => {
  let network: Options['network'] = 'Wi-Fi';
  let attribute: Options['attribute'] = WFAction.WFWorkflowActionParameters.WFWiFiDetail;

  if (WFAction.WFWorkflowActionParameters.WFCellularDetail) {
    network = 'Cellular';
    attribute = WFAction.WFWorkflowActionParameters.WFCellularDetail as Options['attribute'];
  }

  return {
    network,
    attribute,
  };
};

getNetworkDetails.identifier = identifier;
getNetworkDetails.invert = invert;

export default withActionOutput(getNetworkDetails);
