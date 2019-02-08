import { withActionOutput } from '../utils/withActionOutput';

import WFMathOperation from '../interfaces/WF/WFMathOperation';
import WFScientificMathOperation from '../interfaces/WF/WFScientificMathOperation';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';
import WFWorkflowActionParameters from '../interfaces/WF/WFWorkflowActionParameters';

interface Options {
  operand?: number;
  operation?: (
    WFMathOperation
    | '*'
    | 'x'
    | '/'
  );
  scientificOperation?: (
    WFScientificMathOperation
    | 'sqrt'
    | 'cbrt'
  );
}

export const identifier = 'is.workflow.actions.math';

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
    /** A second number to perform the operation on */
    operand,
    /** The operation to apply to the number. Defaults to '+' */
    operation = '+',
    /** The scientific operation to apply to the number */
    scientificOperation,
  }: Options,
): WFWorkflowAction => {
  let parameters;
  if (scientificOperation) {
    parameters = {
      WFMathOperation: '…',
      ...(operand !== undefined && { WFScientificMathOperand: operand }),
      WFScientificMathOperation: (operationsMap.get(scientificOperation) || scientificOperation),
    };
  } else {
    parameters = {
      WFMathOperand: operand || 42,
      WFMathOperation: (operationsMap.get(operation) || operation),
    };
  }

  return {
    WFWorkflowActionIdentifier: identifier,
    WFWorkflowActionParameters: parameters as WFWorkflowActionParameters,
  };
};

export const invert = (
  WFAction: WFWorkflowAction,
): Options => {
  const parameters = WFAction.WFWorkflowActionParameters;
  let options = {};

  if (parameters.WFMathOperation === '…') {
    // Scientific
    options = {
      scientificOperation: parameters.WFScientificMathOperation,
      operand: parameters.WFScientificMathOperand,
    };
  } else {
    // Non-scientific
    options = {
      operation: parameters.WFMathOperation,
      operand: parameters.WFMathOperand,
    };
  }
  return options;
};

export default withActionOutput(calculate);
