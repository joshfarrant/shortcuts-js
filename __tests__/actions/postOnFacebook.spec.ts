import { postOnFacebook } from '../../src/actions';

describe('postOnFacebook function', () => {

  it('is a function', () => {
    expect(typeof postOnFacebook).toBe('function');
  });

  it('builds a postOnFacebook action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.postonfacebook',
      WFWorkflowActionParameters: {},
    };
    const actual = postOnFacebook({});

    expect(actual).toEqual(expected);
  });

});
