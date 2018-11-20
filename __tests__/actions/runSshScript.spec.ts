import { runSshScript } from '../../src/actions';

describe('runSshScript function', () => {

  it('is a function', () => {
    expect(typeof runSshScript).toBe('function');
  });

  it('builds a runSshScript action when options are passed', () => {
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
    const actual = runSshScript({
      host,
      password,
      port,
      script,
      user,
    });

    expect(actual).toEqual(expected);
  });
});
