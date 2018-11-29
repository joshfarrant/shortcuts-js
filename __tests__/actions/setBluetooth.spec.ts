import { setBluetooth } from '../../src/actions';

describe('setBluetooth function', () => {

  it('is a function', () => {
    expect(typeof setBluetooth).toBe('function');
  });

  it('builds a setBluetooth action when no value is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.bluetooth.set',
      WFWorkflowActionParameters: {
        OnValue: true,
      },
    };
    const actual = setBluetooth({});

    expect(actual).toEqual(expected);
  });

  it('builds a setBluetooth action with given value', () => {
    const value = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.bluetooth.set',
      WFWorkflowActionParameters: {
        OnValue: value,
      },
    };
    const actual = setBluetooth({ value });

    expect(actual).toEqual(expected);
  });

});
