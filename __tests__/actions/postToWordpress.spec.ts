import { postToWordPress } from '../../src/actions';

describe('postToWordPress function', () => {

  it('is a function', () => {
    expect(typeof postToWordPress).toBe('function');
  });

  it('builds a postToWordPress action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.wordpress.post',
      WFWorkflowActionParameters: {},
    };
    const actual = postToWordPress({});

    expect(actual).toEqual(expected);
  });

});
