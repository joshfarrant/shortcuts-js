import { skipBack } from '../../src/actions';

describe('skipBack function', () => {
  it('is a function', () => {
    expect(typeof skipBack).toBe('function');
  });

  it('builds a skipBack action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.skipback',
      WFWorkflowActionParameters: {
        WFSkipBackBehavior: 'Beginning',
      },
    };

    const actual = skipBack({});

    expect(actual).toEqual(expected);
  });

  it('builds a skipBack action when a skip back behavior is passed', () => {
    const behavior = 'Previous Song';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.skipback',
      WFWorkflowActionParameters: {
        WFSkipBackBehavior: behavior,
      },
    };

    const actual = skipBack({
      skipBackBehavior: behavior,
    });

    expect(actual).toEqual(expected);
  });

});
