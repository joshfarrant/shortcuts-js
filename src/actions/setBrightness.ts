import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Set Brightness
 * @section Actions > Scripting > Device
 * @icon Brightness
 *
 * Sets the device brightness.
 *
 * ```js
 * setBrightness({
 *   brightness: 75,
 * });
 * ```
 */

const setBrightness = (
  {
    brightness = 100,
  }: {
    /** The brightness percentage value from 0 to 100 */
    brightness?: number,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.setbrightness',
  WFWorkflowActionParameters: {
    WFBrightness: brightness / 100,
  },
});

export default setBrightness;
