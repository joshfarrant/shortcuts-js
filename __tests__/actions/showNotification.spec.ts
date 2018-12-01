import { showNotification } from '../../src/actions';

describe('showNotification function', () => {
  it('is a function', () => {
    expect(typeof showNotification).toBe('function');
  });

  it('builds a showNotification action when no text is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.notification',
      WFWorkflowActionParameters: {
        WFNotificationActionTitle: '',
      },
    };
    const actual = showNotification({});
    expect(actual).toEqual(expected);
  });
});
