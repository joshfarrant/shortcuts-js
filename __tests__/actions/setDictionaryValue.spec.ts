import { setDictionaryValue } from '../../src/actions';

describe('setDictionaryValue function', () => {

  it('is a function', () => {
    expect(typeof setDictionaryValue).toBe('function');
  });

  it('builds a setDictionaryValue action without a given key or value', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setvalueforkey',
      WFWorkflowActionParameters: {
        WFDictionaryKey: '',
        WFDictionaryValue: '',
      },
    };
    const actual = setDictionaryValue({});

    expect(actual).toEqual(expected);
  });

  it('builds a setDictionaryValue action with a given key', () => {
    const key = 'testKey';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setvalueforkey',
      WFWorkflowActionParameters: {
        WFDictionaryKey: 'testKey',
        WFDictionaryValue: '',
      },
    };
    const actual = setDictionaryValue({ key });

    expect(actual).toEqual(expected);
  });

  it('builds a setDictionaryValue action with a given value', () => {
    const value = 'testValue';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setvalueforkey',
      WFWorkflowActionParameters: {
        WFDictionaryKey: '',
        WFDictionaryValue: value,
      },
    };
    const actual = setDictionaryValue({ value });

    expect(actual).toEqual(expected);
  });

  it('builds a setDictionaryValue action with a given key and value', () => {
    const key = 'testKey';
    const value = 'testValue';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setvalueforkey',
      WFWorkflowActionParameters: {
        WFDictionaryKey: key,
        WFDictionaryValue: value,
      },
    };
    const actual = setDictionaryValue({ key, value });

    expect(actual).toEqual(expected);
  });

});
