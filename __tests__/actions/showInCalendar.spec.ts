import { showInCalendar } from '../../src/actions';

describe('showInCalendar function', () => {
  it('is a function', () => {
    expect(typeof showInCalendar).toBe('function');
  });

  it('builds a show in calendar action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.showincalendar',
      WFWorkflowActionParameters: {},
    };
    const actual = showInCalendar({});

    expect(actual).toEqual(expected);
  });
});
