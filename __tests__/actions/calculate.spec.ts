import { calculate } from '../../src/actions';

describe('calculate function', () => {

  it('is a function', () => {
    expect(typeof calculate).toBe('function');
  });

  it('builds a calculate action when an operand is passed', () => {
    const operand = 7;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.math',
      WFWorkflowActionParameters: {
        WFMathOperand: operand,
        WFMathOperation: '+',
      },
    };
    const actual = calculate({ operand });

    expect(actual).toEqual(expected);
  });

  it('builds a calculate action when an operand and operation are passed', () => {
    const operand = 7;
    const operation = '÷';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.math',
      WFWorkflowActionParameters: {
        WFMathOperand: operand,
        WFMathOperation: operation,
      },
    };
    const actual = calculate({ operand, operation });

    expect(actual).toEqual(expected);
  });

  it('builds a calculate action when an operand and mapped operation are passed', () => {
    const operand = 7;
    const operation = '*';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.math',
      WFWorkflowActionParameters: {
        WFMathOperand: operand,
        WFMathOperation: '×',
      },
    };
    const actual = calculate({ operand, operation });

    expect(actual).toEqual(expected);
  });

});
