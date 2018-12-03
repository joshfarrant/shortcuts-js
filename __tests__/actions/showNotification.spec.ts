import { showNotification } from '../../src/actions';

describe('showNotification function', () => {
  it('is a function', () => {
    expect(typeof showNotification).toBe('function');
  });

  it('builds a showNotification action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.notification',
      WFWorkflowActionParameters: {
        WFNotificationActionTitle: '',
        WFNotificationActionBody: 'Hello World',
        WFNotificationActionSound: true,
      },
    };
    const actual = showNotification({});
    expect(actual).toEqual(expected);
  });

  it('builds a showNotification action when a body is passed', () => {
    const bodyString = 'This is a test notification.';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.notification',
      WFWorkflowActionParameters: {
        WFNotificationActionTitle: '',
        WFNotificationActionBody: bodyString,
        WFNotificationActionSound: true,
      },
    };

    const actual = showNotification({
      body: bodyString,
    });

    expect(actual).toEqual(expected);
  });

  it('builds a showNotification action when sound is set to false', () => {

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.notification',
      WFWorkflowActionParameters: {
        WFNotificationActionTitle: '',
        WFNotificationActionBody: 'Hello World',
        WFNotificationActionSound: false,
      },
    };

    const actual = showNotification({
      sound: false,
    });

    expect(actual).toEqual(expected);
  });

});
