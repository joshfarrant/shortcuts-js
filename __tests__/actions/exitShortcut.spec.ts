import { exitShortcut } from '../../src/actions';

describe('exitShortcut function', () => {

  it('is a function', () => {
    expect(typeof exitShortcut).toBe('function');
  });

  it('builds an exitShortcut action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.exit',
      WFWorkflowActionParameters: {},
    };
    const actual = exitShortcut({});

    expect(actual).toEqual(expected);
  });

});
