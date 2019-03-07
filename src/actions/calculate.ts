import { withActionOutput } from '../utils';

import WFMathOperation from '../interfaces/WF/WFMathOperation';
import WFScientificMathOperation from '../interfaces/WF/WFScientificMathOperation';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';
import WFWorkflowActionParameters from '../interfaces/WF/WFWorkflowActionParameters';

/** @ignore */
const operationsMap = new Map([
  ['*', '×'],
  ['x', '×'],
  ['/', '÷'],
  ['sqrt', '√x'],
  ['cbrt', '∛x'],
]);

/**
 * @action Calculate
 * @section Actions > Scripting > Maths
 * @icon Calculator
 *
 * Performs a number operation on the input and returns the result.
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
  {
    operand,
    operation = '+',
    scientificOperation,
  }: {
    /** A second number to perform the operation on */
    operand?: number;
    /** The operation to apply to the number. Defaults to '+' */
    operation?: (
      WFMathOperation
      | '*'
      | 'x'
      | '/'
    );
    /** The scientific operation to apply to the number */
    scientificOperation?: (
      WFScientificMathOperation
      | 'sqrt'
      | 'cbrt'
    );
  },
): WFWorkflowAction => {
  let parameters;
  if (scientificOperation) {
    const WFScientificMathOperation = operationsMap.get(scientificOperation) || scientificOperation;
    parameters = {
      WFMathOperation: '…',
      ...(operand !== undefined && { WFScientificMathOperand: operand }),
      WFScientificMathOperation: WFScientificMathOperation as WFScientificMathOperation,
    };
  } else {
    const WFMathOperation = (operationsMap.get(operation) || operation);
    parameters = {
      WFMathOperand: operand || 42,
      WFMathOperation: WFMathOperation as WFMathOperation,
    };
  }

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.math',
    WFWorkflowActionParameters: parameters as WFWorkflowActionParameters,
  };
};

export default withActionOutput(calculate);
