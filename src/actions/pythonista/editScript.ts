import WFSerialization from '../../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../../interfaces/WF/WFWorkflowAction';

interface Options {
  /** The name of the script to edit */
  script?: WFSerialization | string;
}

export const identifier = 'com.omz-software.Pythonista.editscript';

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
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    PythonistaScript: script,
  },
});

export default editScript;
