import { showInMaps } from '../../src/actions';

describe('showInMaps function', () => {

  it('is a function', () => {
    expect(typeof showInMaps).toBe('function');
  });

  it('builds a showInMaps action when no app is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.searchmaps',
      WFWorkflowActionParameters: {
        WFSearchMapsActionApp: 'Maps',
      },
    };
    const actual = showInMaps({});

    expect(actual).toEqual(expected);
  });

  it('is a function', () => {
    expect(typeof showInMaps).toBe('function');
  });

  it('builds a showInMaps action with given app', () => {
    const app = 'Google Maps';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.searchmaps',
      WFWorkflowActionParameters: {
        WFSearchMapsActionApp: app,
      },
    };
    const actual = showInMaps({ app });

    expect(actual).toEqual(expected);
  });

});
