import { withActionOutput } from '../utils/withActionOutput';

import WFIPAddressSourceOption from '../interfaces/WF/WFIPAddressSourceOption';
import WFIPAddressTypeOption from '../interfaces/WF/WFIPAddressTypeOption';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  address?: WFIPAddressSourceOption;
  type?: WFIPAddressTypeOption;
}

const identifier = 'is.workflow.actions.getipaddress';

/**
 * @action Get Current IP Address
 * @section Actions > Scripting > Device
 * @icon Network
 *
 * Returns the local or external IP address of the device.
 *
 * ```js
 * getCurrentIPAddress({
 *   address: 'External',
 *   type: 'IPv4',
 * });
 * ```
 */
const getCurrentIPAddress = (
  {
    /** The address (public or private) to get */
    address = 'External',
    /** The type of address to get */
    type = 'IPv4',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFIPAddressSourceOption: address,
    WFIPAddressTypeOption: type,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  address: WFAction.WFWorkflowActionParameters.WFIPAddressSourceOption,
  type: WFAction.WFWorkflowActionParameters.WFIPAddressTypeOption,
});

getCurrentIPAddress.identifier = identifier;
getCurrentIPAddress.invert = invert;

export default withActionOutput(getCurrentIPAddress);
