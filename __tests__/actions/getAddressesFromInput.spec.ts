import { getAddressesFromInput } from '../../src/actions';

describe('getAddressesFromInput function', () => {
  it('is a function', () => {
    expect(typeof getAddressesFromInput).toBe('function');
  });

  it('builds a extract archive action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detect.address',
      WFWorkflowActionParameters: {},
    };
    const actual = getAddressesFromInput();

    expect(actual).toEqual(expected);
  });
});
