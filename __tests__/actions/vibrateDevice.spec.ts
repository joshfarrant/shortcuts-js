import { vibrateDevice } from '../../src/actions';

describe('vibrateDevice function', () => {

  it('is a function', () => {
    expect(typeof vibrateDevice).toBe('function');
  });

  it('builds a vibrateDevice action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.vibrate',
      WFWorkflowActionParameters: {},
    };
    const actual = vibrateDevice({});

    expect(actual).toEqual(expected);
  });

});
