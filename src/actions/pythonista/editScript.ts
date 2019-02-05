import WFSerialization from '../../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../../interfaces/WF/WFWorkflowAction';

/**
 * @action Edit Script
 * @section Actions > Scripting > Pythonista
 * @icon Pythonista
 *
 * Opens the specified script in Pythonista for editing.
 *
 * ```js
 * editScript({
 *   script: 'MyScript.py',
 * });
 * ```
 */

const editScript = (
  {
    script = '',
  }: {
    /** The name of the script to edit */
    script?: WFSerialization | string,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.editscript',
  WFWorkflowActionParameters: {
    PythonistaScript: script,
  },
});

export default editScript;
