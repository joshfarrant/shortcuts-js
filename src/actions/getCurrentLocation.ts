import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Current Location Action. Gets the current location of the device.
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
