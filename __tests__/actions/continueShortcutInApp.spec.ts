import { continueShortcutInApp } from '../../src/actions';

describe('continueShortcutInApp function', () => {

  it('is a function', () => {
    expect(typeof continueShortcutInApp).toBe('function');
  });

  it('builds a continueShortcutInApp action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.handoff',
      WFWorkflowActionParameters: {},
    };
    const actual = continueShortcutInApp({});

    expect(actual).toEqual(expected);
  });

});
