import { withActionOutput } from '../utils';

import WFIPAddressSourceOption from '../interfaces/WF/WFIPAddressSourceOption';
import WFIPAddressTypeOption from '../interfaces/WF/WFIPAddressTypeOption';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Current IP Address Action. Returns the public/private IPv4 or IPv6
 * address of the device.
 *
 * ```js
 * getCurrentIpAddress({
 *   'address': 'External',
 *   'type': 'IPv4',
 * });
 * ```
 */
const getCurrentIpAddress = (
  options: {
    /** The address (public or private) to get */
    address?: WFIPAddressSourceOption,
    /** The type of address to get */
    type?: WFIPAddressTypeOption,
  },
): WFWorkflowAction => {
  const {
    address = 'External',
    type = 'IPv4',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.getipaddress',
    WFWorkflowActionParameters: {
      WFIPAddressSourceOption: address,
      WFIPAddressTypeOption: type,
    },
  };
};

export default withActionOutput(getCurrentIpAddress);
