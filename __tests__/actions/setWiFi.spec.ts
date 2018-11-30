import { setWiFi } from '../../src/actions';

describe('setWiFi function', () => {

  it('is a function', () => {
    expect(typeof setWiFi).toBe('function');
  });

  it('builds a setWiFi action when no value is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.wifi.set',
      WFWorkflowActionParameters: {
        OnValue: true,
      },
    };
    const actual = setWiFi({});

    expect(actual).toEqual(expected);
  });

  it('builds a setWiFi action with given value', () => {
    const value = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.wifi.set',
      WFWorkflowActionParameters: {
        OnValue: value,
      },
    };
    const actual = setWiFi({ value });

    expect(actual).toEqual(expected);
  });

});
