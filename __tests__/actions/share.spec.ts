import { share } from '../../src/actions';

describe('share function', () => {
  it('is a function', () => {
    expect(typeof share).toBe('function');
  });

  it('builds an share action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.share',
      WFWorkflowActionParameters: {},
    };
    const actual = share();

    expect(actual).toEqual(expected);
  });
});
