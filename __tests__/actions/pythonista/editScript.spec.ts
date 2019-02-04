import { editScript } from '../../../src/actions/pythonista';

describe('editScript function', () => {

  it('is a function', () => {
    expect(typeof editScript).toBe('function');
  });

  it('builds an editScript action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.editscript',
      WFWorkflowActionParameters: {
        PythonistaScript: '',
      },
    };
    const actual = editScript({});

    expect(actual).toEqual(expected);
  });

  it('builds an editScript action with a script name', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.omz-software.Pythonista.editscript',
      WFWorkflowActionParameters: {
        PythonistaScript: 'test.py',
      },
    };
    const actual = editScript({
      script: 'test.py',
    });

    expect(actual).toEqual(expected);
  });

});
