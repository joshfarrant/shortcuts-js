import { setLowPowerMode } from '../../src/actions';

describe('setLowPowerMode function', () => {

  it('is a function', () => {
    expect(typeof setLowPowerMode).toBe('function');
  });

  it('builds a setLowPowerMode action when no value is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.lowpowermode.set',
      WFWorkflowActionParameters: {
        OnValue: true,
      },
    };
    const actual = setLowPowerMode({});

    expect(actual).toEqual(expected);
  });

  it('builds a setLowPowerMode action with given value', () => {
    const value = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.lowpowermode.set',
      WFWorkflowActionParameters: {
        OnValue: value,
      },
    };
    const actual = setLowPowerMode({ value });

    expect(actual).toEqual(expected);
  });

});
