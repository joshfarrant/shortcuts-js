import { calculate } from '../../src/actions';

describe('calculate function', () => {

  it('is a function', () => {
    expect(typeof calculate).toBe('function');
  });

  it('builds a calculate action when nothing is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.math',
      WFWorkflowActionParameters: {
        WFMathOperand: 42,
        WFMathOperation: '+',
      },
    };
    const actual = calculate({});

    expect(actual).toEqual(expected);
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

  it('builds a calculate action when a scientific operation is passed', () => {
    const scientificOperation = 'log(x)';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.math',
      WFWorkflowActionParameters: {
        WFMathOperation: '…',
        WFScientificMathOperation: scientificOperation,
      },
    };
    const actual = calculate({ scientificOperation });

    expect(actual).toEqual(expected);
  });

  it('builds a calculate action when an operand and a scientific operation are passed', () => {
    const operand = 12;
    const scientificOperation = 'x^y';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.math',
      WFWorkflowActionParameters: {
        WFMathOperation: '…',
        WFScientificMathOperand: 12,
        WFScientificMathOperation: scientificOperation,
      },
    };
    const actual = calculate({ operand, scientificOperation });

    expect(actual).toEqual(expected);
  });

});
