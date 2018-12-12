import { removeReminders } from '../../src/actions';

describe('removeReminders function', () => {
  it('is a function', () => {
    expect(typeof removeReminders).toBe('function');
  });

  it('builds a remove reminders action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.removereminders',
      WFWorkflowActionParameters: {},
    };
    const actual = removeReminders();

    expect(actual).toEqual(expected);
  });
});
