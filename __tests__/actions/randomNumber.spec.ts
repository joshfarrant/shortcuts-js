import { randomNumber } from '../../src/actions';

describe('randomNumber function', () => {

  it('is a function', () => {
    expect(typeof randomNumber).toBe('function');
  });

  it('builds a randomNumber action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.number.random',
      WFWorkflowActionParameters: {
        WFRandomNumberMinimum: 0,
        WFRandomNumberMaximum: 100,
      },
    };
    const actual = randomNumber({});

    expect(actual).toEqual(expected);
  });

  it('builds a randomNumber action with explicit min and max', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.number.random',
      WFWorkflowActionParameters: {
        WFRandomNumberMinimum: 13,
        WFRandomNumberMaximum: 67,
      },
    };
    const actual = randomNumber({
      minimum: 13,
      maximum: 67,
    });

    expect(actual).toEqual(expected);
  });

});
