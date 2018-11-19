import { getType } from '../../src/actions';

describe('getType function', () => {

  it('is a function', () => {
    expect(typeof getType).toBe('function');
  });

  it('builds a getType action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getitemtype',
      WFWorkflowActionParameters: {},
    };
    const actual = getType({});

    expect(actual).toEqual(expected);
  });

});
