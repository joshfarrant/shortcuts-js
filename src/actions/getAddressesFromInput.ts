import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.detect.address';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getAddressesFromInput.identifier = identifier;
getAddressesFromInput.invert = invert;

export default getAddressesFromInput;
