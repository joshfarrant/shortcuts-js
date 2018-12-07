import { tweet } from '../../src/actions';

describe('tweet function', () => {

  it('is a function', () => {
    expect(typeof tweet).toBe('function');
  });

  it('builds a tweet action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.tweet',
      WFWorkflowActionParameters: {},
    };
    const actual = tweet({});

    expect(actual).toEqual(expected);
  });

});
