import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  brightness?: number;
}

const identifier = 'is.workflow.actions.setbrightness';

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
    /** The brightness percentage value from 0 to 100 */
    brightness = 100,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFBrightness: brightness / 100,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  brightness: (WFAction.WFWorkflowActionParameters.WFBrightness as number) * 100,
});

setBrightness.identifier = identifier;
setBrightness.invert = invert;

export default setBrightness;
