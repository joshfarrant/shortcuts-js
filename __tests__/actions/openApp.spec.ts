import { openApp } from '../../src/actions';

describe('openApp function', () => {

  it('is a function', () => {
    expect(typeof openApp).toBe('function');
  });

  it('builds an openApp action when no text is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.openapp',
      WFWorkflowActionParameters: {
        WFAppIdentifier: '',
      },
    };
    const actual = openApp({});

    expect(actual).toEqual(expected);
  });

  it('builds an openApp action with given appId', () => {
    const appId = 'Hello, world!';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.openapp',
      WFWorkflowActionParameters: {
        WFAppIdentifier: appId,
      },
    };
    const actual = openApp({ appId });

    expect(actual).toEqual(expected);
  });

});
