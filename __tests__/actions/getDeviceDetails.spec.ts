import { getDeviceDetails } from '../../src/actions';

describe('getDeviceDetails function', () => {

  it('is a function', () => {
    expect(typeof getDeviceDetails).toBe('function');
  });

  it('builds a getDeviceDetails action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getdevicedetails',
      WFWorkflowActionParameters: {
        WFDeviceDetail: 'Device Name',
      },
    };
    const actual = getDeviceDetails({});

    expect(actual).toEqual(expected);
  });

  it('builds a getDeviceDetails action when a detail is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getdevicedetails',
      WFWorkflowActionParameters: {
        WFDeviceDetail: 'System Version',
      },
    };
    const actual = getDeviceDetails({ detail: 'System Version' });

    expect(actual).toEqual(expected);
  });

});
