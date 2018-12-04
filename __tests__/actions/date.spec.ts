import { date } from '../../src/actions';

describe('date function', () => {

  it('is a function', () => {
    expect(typeof date).toBe('function');
  });

  it('builds a date action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.date',
      WFWorkflowActionParameters: {
        WFDateActionMode: 'Current Date',
      },
    };
    const actual = date({});

    expect(actual).toEqual(expected);
  });

  it('builds a date action when current date is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.date',
      WFWorkflowActionParameters: {
        WFDateActionMode: 'Current Date',
      },
    };
    const actual = date({
      use: 'Current Date',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a date action when a custom date string is passed', () => {
    const dateString = 'Tomorrow';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.date',
      WFWorkflowActionParameters: {
        WFDateActionMode: 'Specified Date',
        WFDateActionDate: dateString,
      },
    };
    const actual = date({
      use: 'Specified Date',
      date: dateString,
    });

    expect(actual).toEqual(expected);
  });

});
