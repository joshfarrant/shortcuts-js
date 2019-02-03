import { withActionOutput } from '../utils';

import WFMapsApps from '../interfaces/WF/WFMapsApps';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Show in Maps
 * @section Content Types > Location > Maps
 * @icon Maps
 *
 * Opens your choice of Maps, Google Maps, or Waze and searches for the location, place, or text that was passed into the action.
 *
 * ```js
 * showInMaps({
 *  app: 'Google Maps',
 * });
 * ```
 */

const showInMaps = (
  {
    app = 'Maps',
  }: {
    /** The maps app to use */
    app?: WFMapsApps,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.searchmaps',
  WFWorkflowActionParameters: {
    WFSearchMapsActionApp: app,
  },
});

export default withActionOutput(showInMaps);
