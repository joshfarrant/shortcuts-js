import { editPythonistaScript } from '../../src/actions';

describe('editPythonistaScript function', () => {

  it('is a function', () => {
    expect(typeof editPythonistaScript).toBe('function');
  });

  it('builds an editPythonistaScript action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.editscript',
      WFWorkflowActionParameters: {
        PythonistaScript: '',
      },
    };
    const actual = editPythonistaScript({});

    expect(actual).toEqual(expected);
  });

  it('builds an editPythonistaScript action with a script name', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.editscript',
      WFWorkflowActionParameters: {
        PythonistaScript: 'test.py',
      },
    };
    const actual = editPythonistaScript({
      script: 'test.py',
    });

    expect(actual).toEqual(expected);
  });

});
