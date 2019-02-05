import { list } from '../../src/actions';

describe('list function', () => {
  it('is a function', () => {
    expect(typeof list).toBe('function');
  });

  it('builds a list action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.list',
      WFWorkflowActionParameters: {
        WFItems: [],
      },
    };
    const actual = list({});

    expect(actual).toEqual(expected);
  });

  it('builds a list action when passed a value', () => {
    const value = [
      'a',
      'b',
      'c',
      '123',
    ];

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.list',
      WFWorkflowActionParameters: {
        WFItems: [...value],
      },
    };
    const actual = list({
      value,
    });

    expect(actual).toEqual(expected);
  });
});
