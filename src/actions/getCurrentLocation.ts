import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Current Location
 * @section Content Types > Location > Get Current Location
 * @icon Location
 *
 * Gets the current location of the device.
 *
 * ```js
 * getCurrentLocation();
 * ```
 */

const getCurrentLocation = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.getcurrentlocation',
  WFWorkflowActionParameters: {},
});

export default getCurrentLocation;
