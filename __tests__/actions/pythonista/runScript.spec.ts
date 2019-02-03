import { runScript } from '../../../src/actions/pythonista';

describe('runScript function', () => {

  it('is a function', () => {
    expect(typeof runScript).toBe('function');
  });

  it('builds a runScript action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.runscript',
      WFWorkflowActionParameters: {
        PythonistaScript: '',
      },
    };
    const actual = runScript({});

    expect(actual).toEqual(expected);
  });

  it('builds a runScript action with a script name', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.runscript',
      WFWorkflowActionParameters: {
        PythonistaScript: 'test.py',
      },
    };
    const actual = runScript({
      script: 'test.py',
    });

    expect(actual).toEqual(expected);
  });

});
