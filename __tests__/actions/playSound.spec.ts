import { playSound } from '../../src/actions';

describe('playSound function', () => {
  it('is a function', () => {
    expect(typeof playSound).toBe('function');
  });

  it('builds a play sound action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.playsound',
      WFWorkflowActionParameters: {},
    };
    const actual = playSound();

    expect(actual).toEqual(expected);
  });
});
