import { showInITunesStore } from '../../src/actions';

describe('showInITunesStore function', () => {
  it('is a function', () => {
    expect(typeof showInITunesStore).toBe('function');
  });

  it('builds a show in itunes store action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.showinstore',
      WFWorkflowActionParameters: {},
    };
    const actual = showInITunesStore();

    expect(actual).toEqual(expected);
  });
});
