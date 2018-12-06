import { postToTumblr } from '../../src/actions';

describe('postToTumblr function', () => {

  it('is a function', () => {
    expect(typeof postToTumblr).toBe('function');
  });

  it('builds a postToTumblr action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.tumblr.post',
      WFWorkflowActionParameters: {},
    };
    const actual = postToTumblr({});

    expect(actual).toEqual(expected);
  });

});
