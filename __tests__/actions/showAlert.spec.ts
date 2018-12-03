import { showAlert } from '../../src/actions';

describe('showAlert function', () => {

  it('is a function', () => {
    expect(typeof showAlert).toBe('function');
  });

  it('builds a showAlert action', () => {
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

  it('builds a showAlert action with custom values', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.alert',
      WFWorkflowActionParameters: {
        WFAlertActionTitle: 'Another Alert',
        WFAlertActionMessage: 'This is a message.',
        WFAlertActionCancelButtonShown: false,
      },
    };
    const actual = showAlert({
      title: 'Another Alert',
      message: 'This is a message.',
      showCancelButton: false,
    });

    expect(actual).toEqual(expected);
  });

});
