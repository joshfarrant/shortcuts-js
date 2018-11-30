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

  it('builds a getCurrentIpAddress action when an address is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getipaddress',
      WFWorkflowActionParameters: {
        WFIPAddressSourceOption: 'Local',
        WFIPAddressTypeOption: 'IPv4',
      },
    };
    const actual = getCurrentIpAddress({ address: 'Local' });

    expect(actual).toEqual(expected);
  });

  it('builds a getCurrentIpAddress action when a type is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getipaddress',
      WFWorkflowActionParameters: {
        WFIPAddressSourceOption: 'External',
        WFIPAddressTypeOption: 'IPv6',
      },
    };
    const actual = getCurrentIpAddress({ type: 'IPv6' });

    expect(actual).toEqual(expected);
  });

});
