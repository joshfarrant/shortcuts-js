import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Addresses from Input
 * @section Content Types > Location > Maps
 * @icon Maps
 *
 * Returns any street addresses found in the output from the previous action.
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
