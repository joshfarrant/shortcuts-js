import { runScriptOverSSH } from '../../src/actions';

describe('runScriptOverSSH function', () => {

  it('is a function', () => {
    expect(typeof runScriptOverSSH).toBe('function');
  });

  it('builds a runScriptOverSSH action when options are passed', () => {
    const host = '192.168.1.1';
    const password = 'root';
    const port = '22';
    const script = 'uptime';
    const user = 'root';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.runsshscript',
      WFWorkflowActionParameters: {
        WFSSHHost: host,
        WFSSHPassword: password,
        WFSSHPort: port,
        WFSSHScript: script,
        WFSSHUser: user,
      },
    };
    const actual = runScriptOverSSH({
      host,
      password,
      port,
      script,
      user,
    });

    expect(actual).toEqual(expected);
  });

});
