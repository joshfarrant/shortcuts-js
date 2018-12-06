import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Addresses from Input Action. Returns any street addresses found in the output from the previous action.
 *
 * ```js
 * getAddressesFromInput();
 * ```
 */

const getAddressesFromInput = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detect.address',
  WFWorkflowActionParameters: {},
});

export default getAddressesFromInput;
