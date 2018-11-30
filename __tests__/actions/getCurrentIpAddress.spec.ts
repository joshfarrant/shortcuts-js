import { getCurrentIpAddress } from '../../src/actions';

describe('getCurrentIpAddress function', () => {

  it('is a function', () => {
    expect(typeof getCurrentIpAddress).toBe('function');
  });

  it('builds a getCurrentIpAddress action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getipaddress',
      WFWorkflowActionParameters: {
        WFIPAddressSourceOption: 'External',
        WFIPAddressTypeOption: 'IPv4',
      },
    };
    const actual = getCurrentIpAddress({});

    expect(actual).toEqual(expected);
  });

});
