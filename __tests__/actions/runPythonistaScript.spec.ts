import { runPythonistaScript } from '../../src/actions';

describe('runPythonistaScript function', () => {

  it('is a function', () => {
    expect(typeof runPythonistaScript).toBe('function');
  });

  it('builds a runPythonistaScript action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.runscript',
      WFWorkflowActionParameters: {
        PythonistaScript: '',
      },
    };
    const actual = runPythonistaScript({});

    expect(actual).toEqual(expected);
  });

  it('builds a runPythonistaScript action with a script name', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.runscript',
      WFWorkflowActionParameters: {
        PythonistaScript: 'test.py',
      },
    };
    const actual = runPythonistaScript({
      script: 'test.py',
    });

    expect(actual).toEqual(expected);
  });

});
