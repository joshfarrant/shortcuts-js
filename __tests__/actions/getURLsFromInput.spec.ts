import { getURLsFromInput } from '../../src/actions';

describe('getURLsFromInput function', () => {
  it('is a function', () => {
    expect(typeof getURLsFromInput).toBe('function');
  });

  it('builds a get urls from input action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detect.link',
      WFWorkflowActionParameters: {},
    };
    const actual = getURLsFromInput();

    expect(actual).toEqual(expected);
  });
});
