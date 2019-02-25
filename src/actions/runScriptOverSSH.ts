import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  host: WFSerialization | string;
  password: WFSerialization | string;
  port: WFSerialization | string;
  script: WFSerialization | string;
  user: WFSerialization | string;
}

const identifier = 'is.workflow.actions.runsshscript';

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
  {
    /** The host to run the script on */
    host,
    /** The password for the specified user */
    password,
    /** The port of the host */
    port,
    /** The script to run */
    script,
    /** The user to run the script as */
    user,
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFSSHHost: host,
    WFSSHPassword: password,
    WFSSHPort: port,
    WFSSHScript: script,
    WFSSHUser: user,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  host: WFAction.WFWorkflowActionParameters.WFSSHHost as Options['host'],
  password: WFAction.WFWorkflowActionParameters.WFSSHPassword as Options['password'],
  port: WFAction.WFWorkflowActionParameters.WFSSHPort as Options['port'],
  script: WFAction.WFWorkflowActionParameters.WFSSHScript as Options['script'],
  user: WFAction.WFWorkflowActionParameters.WFSSHUser as Options['user'],
});

runScriptOverSSH.identifier = identifier;
runScriptOverSSH.invert = invert;

export default runScriptOverSSH;
