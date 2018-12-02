import { getNetworkDetails } from '../../src/actions';

describe('getNetworkDetails function', () => {

  it('is a function', () => {
    expect(typeof getNetworkDetails).toBe('function');
  });

  it('builds a default getNetworkDetails action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getwifi',
      WFWorkflowActionParameters: {
        WFNetworkDetailsNetwork: 'Wi-Fi',
        WFWiFiDetail: 'Network Name',
      },
    };
    const actual = getNetworkDetails({});

    expect(actual).toEqual(expected);
  });

  it('builds a getNetworkDetails cellular action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getwifi',
      WFWorkflowActionParameters: {
        WFNetworkDetailsNetwork: 'Cellular',
        WFCellularDetail: 'Radio Technology',
      },
    };
    const actual = getNetworkDetails({
      network: 'Cellular',
      attribute: 'Radio Technology',
    });

    expect(actual).toEqual(expected);
  });
});
