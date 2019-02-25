import { withActionOutput } from '../utils/withActionOutput';

import WFMapsApps from '../interfaces/WF/WFMapsApps';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  app?: WFMapsApps;
}

const identifier = 'is.workflow.actions.searchmaps';

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
    /** The maps app to use */
    app = 'Maps',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFSearchMapsActionApp: app,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  app: WFAction.WFWorkflowActionParameters.WFSearchMapsActionApp as WFMapsApps,
});

showInMaps.identifier = identifier;
showInMaps.invert = invert;

export default withActionOutput(showInMaps);
