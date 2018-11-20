import { runScriptOverSsh } from '../../src/actions';

describe('runScriptOverSsh function', () => {

  it('is a function', () => {
    expect(typeof runScriptOverSsh).toBe('function');
  });

  it('builds a runScriptOverSsh action when options are passed', () => {
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
    const actual = runScriptOverSsh({
      host,
      password,
      port,
      script,
      user,
    });

    expect(actual).toEqual(expected);
  });
});
