import { getDictionaryValue } from '../../src/actions';

describe('getDictionaryValue function', () => {

  it('is a function', () => {
    expect(typeof getDictionaryValue).toBe('function');
  });

  it('builds a getDictionaryValue action when no props are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getvalueforkey',
      WFWorkflowActionParameters: {
        WFDictionaryKey: '',
        WFGetDictionaryValueType: 'Value',
      },
    };
    const actual = getDictionaryValue({});

    expect(actual).toEqual(expected);
  });

  it('builds a getDictionaryValue action when a key is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getvalueforkey',
      WFWorkflowActionParameters: {
        WFDictionaryKey: 'test',
        WFGetDictionaryValueType: 'Value',
      },
    };
    const actual = getDictionaryValue({
      key: 'test',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a getDictionaryValue action when a get is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getvalueforkey',
      WFWorkflowActionParameters: {
        WFDictionaryKey: '',
        WFGetDictionaryValueType: 'All Keys',
      },
    };
    const actual = getDictionaryValue({
      get: 'All Keys',
    });

    expect(actual).toEqual(expected);
  });

});
