import WFSerialization from '../../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../../interfaces/WF/WFWorkflowAction';

interface Options {
  /** The name of the script to run */
  script?: WFSerialization | string;
}

export const identifier = 'com.omz-software.Pythonista.runscript';

/**
 * @action Run Script
 * @section Actions > Scripting > Pythonista
 * @icon Pythonista
 *
 * Runs the specified script in Pythonista and waits to continue the shortcut until you return to the Shortcuts app.
 *
 * ```js
 * runScript({
 *   script: 'MyScript.py',
 * });
 * ```
 */

const runScript = (
  {
    script = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    PythonistaScript: script,
  },
});

export default runScript;
