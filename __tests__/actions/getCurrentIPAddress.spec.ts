import { getCurrentIPAddress } from '../../src/actions';

describe('getCurrentIPAddress function', () => {

  it('is a function', () => {
    expect(typeof getCurrentIPAddress).toBe('function');
  });

  it('builds a getCurrentIPAddress action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getipaddress',
      WFWorkflowActionParameters: {
        WFIPAddressSourceOption: 'External',
        WFIPAddressTypeOption: 'IPv4',
      },
    };
    const actual = getCurrentIPAddress({});

    expect(actual).toEqual(expected);
  });

  it('builds a getCurrentIPAddress action when an address is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getipaddress',
      WFWorkflowActionParameters: {
        WFIPAddressSourceOption: 'Local',
        WFIPAddressTypeOption: 'IPv4',
      },
    };
    const actual = getCurrentIPAddress({ address: 'Local' });

    expect(actual).toEqual(expected);
  });

  it('builds a getCurrentIPAddress action when a type is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getipaddress',
      WFWorkflowActionParameters: {
        WFIPAddressSourceOption: 'External',
        WFIPAddressTypeOption: 'IPv6',
      },
    };
    const actual = getCurrentIPAddress({ type: 'IPv6' });

    expect(actual).toEqual(expected);
  });

});
