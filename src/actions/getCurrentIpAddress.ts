import { withActionOutput } from '../utils';

import WFIPAddressSourceOption from '../interfaces/WF/WFIPAddressSourceOption';
import WFIPAddressTypeOption from '../interfaces/WF/WFIPAddressTypeOption';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Current IP Address
 * @section Actions > Scripting > Device
 * @icon Network
 *
 * Returns the local or external IP address of the device.
 *
 * ```js
 * getCurrentIpAddress({
 *   address: 'External',
 *   type: 'IPv4',
 * });
 * ```
 */

const getCurrentIpAddress = (
  {
    address = 'External',
    type = 'IPv4',
  }: {
    /** The address (public or private) to get */
    address?: WFIPAddressSourceOption,
    /** The type of address to get */
    type?: WFIPAddressTypeOption,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getipaddress',
  WFWorkflowActionParameters: {
    WFIPAddressSourceOption: address,
    WFIPAddressTypeOption: type,
  },
});

export default withActionOutput(getCurrentIpAddress);
