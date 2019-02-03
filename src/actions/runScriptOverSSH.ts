import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Run Script Over SSH
 * @section Actions > Scripting > Run Script Over SSH
 * @icon Scripting
 *
 * Runs a script on a remote computer over SSH.
 *
 * ```js
 * runScriptOverSSH({
 *   host: '192.168.1.100',
 *   password: 'hunter2',
 *   port: '5000',
 *   script: 'ls',
 *   user: 'tcook',
 * });
 * ```
 */

const runScriptOverSSH = (
  options: {
    /** The host to run the script on */
    host: WFSerialization | string;
    /** The password for the specified user */
    password: WFSerialization | string;
    /** The port of the host */
    port: WFSerialization | string;
    /** The script to run */
    script: WFSerialization | string;
    /** The user to run the script as */
    user: WFSerialization | string;
  },
): WFWorkflowAction => {
  const {
    host,
    password,
    port,
    script,
    user,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.runsshscript',
    WFWorkflowActionParameters: {
      WFSSHHost: host,
      WFSSHPassword: password,
      WFSSHPort: port,
      WFSSHScript: script,
      WFSSHUser: user,
    },
  };
};

export default runScriptOverSSH;
