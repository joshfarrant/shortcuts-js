import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Run Script (Pythonista) Action. Runs the specified script in Pythonista and
 * waits to continue the shortcut until you return to the Shortcuts app.
 *
 * ```js
 * runPythonistaScript({
 *   script: 'MyScript.py',
 * });
 * ```
 */
const runPythonistaScript = (
  options: {
    /** The name of the script to run */
    script?: WFSerialization | string,
  },
): WFWorkflowAction => {
  const {
    script = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.runscript',
    WFWorkflowActionParameters: {
      PythonistaScript: script,
    },
  };
};

export default runPythonistaScript;
