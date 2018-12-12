import { showInItunesStore } from '../../src/actions';

describe('showInItunesStore function', () => {
  it('is a function', () => {
    expect(typeof showInItunesStore).toBe('function');
  });

  it('builds a show in itunes store action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.showinstore',
      WFWorkflowActionParameters: {},
    };
    const actual = showInItunesStore();

    expect(actual).toEqual(expected);
  });
});
