import { getMyShortcuts } from '../../src/actions';

describe('getMyShortcuts function', () => {

  it('is a function', () => {
    expect(typeof getMyShortcuts).toBe('function');
  });

  it('builds a getMyShortcuts action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getmyworkflows',
      WFWorkflowActionParameters: {},
    };
    const actual = getMyShortcuts({});

    expect(actual).toEqual(expected);
  });

});
