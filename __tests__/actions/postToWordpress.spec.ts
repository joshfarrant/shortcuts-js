import { postToWordpress } from '../../src/actions';

describe('postToWordpress function', () => {

  it('is a function', () => {
    expect(typeof postToWordpress).toBe('function');
  });

  it('builds a postToWordpress action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.wordpress.post',
      WFWorkflowActionParameters: {},
    };
    const actual = postToWordpress({});

    expect(actual).toEqual(expected);
  });

});
