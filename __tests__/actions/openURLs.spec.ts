import { openURLs } from '../../src/actions';

describe('openURLs function', () => {
  it('is a function', () => {
    expect(typeof openURLs).toBe('function');
  });

  it('builds a open URL action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.openurl',
      WFWorkflowActionParameters: {},
    };
    const actual = openURLs();

    expect(actual).toEqual(expected);
  });
});
