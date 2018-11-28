import { withUUID } from '../utils';

import WFMathOperation from '../interfaces/WF/WFMathOperation';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/** @ignore */
const operationsMap = new Map([
  ['*', '×'],
  ['x', '×'],
  ['/', '÷'],
  ['sqrt', '√x'],
  ['cbrt', '∛x'],
]);

/**
 * Calculate Action. Performs a number operation on the input and returns the result.
 *
 * ```js
 * // Divide the input by 7
 * calculate({
 *   operand: 7,
 *   operation: '/',
 * });
 * ```
 */
const calculate = (
  options: {
    /** A second number to perform the operation on */
    operand: number;
    /** The operation to apply to the number. Defaults to '+' */
    operation?: (
      WFMathOperation
      | '*'
      | 'x'
      | '/'
    );
  },
): WFWorkflowAction => {
  const {
    operand,
    operation = '+',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.math',
    WFWorkflowActionParameters: {
      WFMathOperand: operand,
      WFMathOperation: (operationsMap.get(operation) || operation) as WFMathOperation,
    },
  };
};

export default withUUID(calculate);
