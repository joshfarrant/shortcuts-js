import { getMapsURL } from '../../src/actions';

describe('getMapsURL function', () => {

  it('is a function', () => {
    expect(typeof getMapsURL).toBe('function');
  });

  it('builds a getMapsURL action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getmapslink',
      WFWorkflowActionParameters: {},
    };
    const actual = getMapsURL({});

    expect(actual).toEqual(expected);
  });

});
