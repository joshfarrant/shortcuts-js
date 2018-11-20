/** @module actions */

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type RunScriptOverSshOptions = {
  host: WFSerialization | string;
  password: WFSerialization | string;
  port: WFSerialization | string;
  script: WFSerialization | string;
  user: WFSerialization | string;
};

/**
 * Run Script Over SSH Action. Runs a script on a remote computer over SSH.
 * @param {Object} options
 * @param {string} options.host
 * @param {string} options.password
 * @param {string} options.port
 * @param {string} options.script
 * @param {string} options.user
 */
const runScriptOverSsh = (
  {
    host,
    password,
    port,
    script,
    user,
  }: RunScriptOverSshOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.runsshscript',
  WFWorkflowActionParameters: {
    WFSSHHost: host,
    WFSSHPassword: password,
    WFSSHPort: port,
    WFSSHScript: script,
    WFSSHUser: user,
  },
});

export default runScriptOverSsh;
