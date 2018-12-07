import { showInMaps } from '../../src/actions';

describe('showInMaps function', () => {

  it('is a function', () => {
    expect(typeof showInMaps).toBe('function');
  });

  it('builds a showInMaps action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.searchmaps',
      WFWorkflowActionParameters: {},
    };
    const actual = showInMaps({});

    expect(actual).toEqual(expected);
  });

});
