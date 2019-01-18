/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Set Brightness Action. Sets the device brightness.
 *
 * ```js
 * setBrightness({
 *   brightness: 75,
 * });
 * ```
 */
const setBrightness = (
  options: {
    /** The brightness percentage value from 0 to 100 */
    brightness?: number,
  },
): WFWorkflowAction => {
  const {
    brightness = 100,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.setbrightness',
    WFWorkflowActionParameters: {
      WFBrightness: brightness / 100,
    },
  };
};

export default setBrightness;
