import { getBatteryLevel } from '../../src/actions';

describe('getBatteryLevel function', () => {

  it('is a function', () => {
    expect(typeof getBatteryLevel).toBe('function');
  });

  it('builds a get battery level action when no text is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getbatterylevel',
      WFWorkflowActionParameters: {},
    };
    const actual = getBatteryLevel({});

    expect(actual).toEqual(expected);
  });

});
