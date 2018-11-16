import { setAirplaneMode } from '../../src/actions';

describe('setAirplaneMode function', () => {

  it('is a function', () => {
    expect(typeof setAirplaneMode).toBe('function');
  });

  it('builds a setAirplaneMode action when no value is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.airplanemode.set',
      WFWorkflowActionParameters: {
        OnValue: true,
      },
    };
    const actual = setAirplaneMode({});

    expect(actual).toEqual(expected);
  });

  it('builds a setAirplaneMode action with given value', () => {
    const value = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.airplanemode.set',
      WFWorkflowActionParameters: {
        OnValue: value,
      },
    };
    const actual = setAirplaneMode({ value });

    expect(actual).toEqual(expected);
  });

});
