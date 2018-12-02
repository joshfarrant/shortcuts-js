import { showAlert } from '../../src/actions';

describe('showAlert function', () => {

  it('is a function', () => {
    expect(typeof showAlert).toBe('function');
  });

  it('builds a showAlert action (default)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.alert',
      WFWorkflowActionParameters: {
        WFAlertActionTitle: 'Alert',
        WFAlertActionMessage: 'Do you want to continue?',
        WFAlertActionCancelButtonShown: true,
      },
    };
    const actual = showAlert({});

    expect(actual).toEqual(expected);
  });

  it('builds a showAlert action (custom)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.alert',
      WFWorkflowActionParameters: {
        WFAlertActionTitle: 'This is a title',
        WFAlertActionMessage: 'This is a message',
        WFAlertActionCancelButtonShown: false,
      },
    };
    const actual = showAlert({
      title: 'This is a title',
      message: 'This is a message',
      showCancelButton: false,
    });

    expect(actual).toEqual(expected);
  });

});
