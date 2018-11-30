import { setCellularData } from '../../src/actions';

describe('setCellularData function', () => {

  it('is a function', () => {
    expect(typeof setCellularData).toBe('function');
  });

  it('builds a setCellularData action when no value is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.cellulardata.set',
      WFWorkflowActionParameters: {
        OnValue: true,
      },
    };
    const actual = setCellularData({});

    expect(actual).toEqual(expected);
  });

  it('builds a setCellularData action with given value', () => {
    const value = false;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.cellulardata.set',
      WFWorkflowActionParameters: {
        OnValue: value,
      },
    };
    const actual = setCellularData({ value });

    expect(actual).toEqual(expected);
  });

});
