import { withActionOutput } from '../utils';

import WFMapsApps from '../interfaces/WF/WFMapsApps';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Show in Maps Action. Opens your choice of Maps, Google Maps or Waze, and searches for the location, place or text that was passed into the action.
 *
 * ```js
 * showInMaps({
 *  app: 'Google Maps',
 * });
 * ```
 */
const showInMaps = (
  options: {
    app?: WFMapsApps,
  },
): WFWorkflowAction => {
  const {
    app = '',
  } = options;

  return ({
    WFWorkflowActionIdentifier: 'is.workflow.actions.searchmaps',
    WFWorkflowActionParameters: {
      WFSearchMapsActionApp: app,
    },
  });
};

export default withActionOutput(showInMaps);
