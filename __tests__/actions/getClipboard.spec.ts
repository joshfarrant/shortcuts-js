import { getClipboard } from '../../src/actions';

describe('getClipboard function', () => {
  it('is a function', () => {
    expect(typeof getClipboard).toBe('function');
  });

  it('builds a get clipboard action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getclipboard',
      WFWorkflowActionParameters: {},
    };
    const actual = getClipboard();

    expect(actual).toEqual(expected);
  });
});
