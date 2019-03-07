import { getCurrentLocation } from '../../src/actions';

describe('getCurrentLocation function', () => {
  it('is a function', () => {
    expect(typeof getCurrentLocation).toBe('function');
  });

  it('builds a get current location action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getcurrentlocation',
      WFWorkflowActionParameters: {},
    };
    const actual = getCurrentLocation();

    expect(actual).toEqual(expected);
  });
});
