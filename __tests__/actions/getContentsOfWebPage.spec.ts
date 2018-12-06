import { getContentsOfWebPage } from '../../src/actions';

describe('getContentsOfWebPage function', () => {
  it('is a function', () => {
    expect(typeof getContentsOfWebPage).toBe('function');
  });

  it('builds a get contents of web page action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getwebpagecontents',
      WFWorkflowActionParameters: {},
    };
    const actual = getContentsOfWebPage({});

    expect(actual).toEqual(expected);
  });
});
