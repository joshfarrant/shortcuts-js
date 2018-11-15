import { wait } from '../../src/actions';

describe('wait function', () => {

  it('is a function', () => {
    expect(typeof wait).toBe('function');
  });

  it('builds a wait action when no time is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.delay',
      WFWorkflowActionParameters: {
        WFDelayTime: 1,
      },
    };
    const actual = wait({});

    expect(actual).toEqual(expected);
  });

  it('builds a wait action when a time is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.delay',
      WFWorkflowActionParameters: {
        WFDelayTime: 200,
      },
    };
    const actual = wait({
      time: 200,
    });

    expect(actual).toEqual(expected);
  });

});
