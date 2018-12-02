import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Edit Script (Pythonista) Action. Open the specified script in Pythonista for
 * editing.
 *
 * ```js
 * editPythonistaScript({
 *   script: 'MyScript.py',
 * });
 * ```
 */
const editPythonistaScript = (
  options: {
    /** The name of the script to edit */
    script?: WFSerialization | string,
  },
): WFWorkflowAction => {
  const {
    script = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.editscript',
    WFWorkflowActionParameters: {
      PythonistaScript: script,
    },
  };
};

export default editPythonistaScript;
