import { number } from '../../src/actions';

describe('number function', () => {

  it('is a function', () => {
    expect(typeof number).toBe('function');
  });

  it('builds a number action when no text is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.number',
      WFWorkflowActionParameters: {
        WFNumberActionNumber: 0,
      },
    };
    const actual = number({});

    expect(actual).toEqual(expected);
  });

  it('builds a number action with given text', () => {
    const testNumber = 42;

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.number',
      WFWorkflowActionParameters: {
        WFNumberActionNumber: testNumber,
      },
    };
    const actual = number({ number: testNumber });

    expect(actual).toEqual(expected);
  });

});
