/** @module actions */

import { withUUID } from '../utils';

import WFMathOperation from '../interfaces/WF/WFMathOperation';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @typedef {(WFMathOperation|'*'|'x'|'/')} Operation
 */

type Operation = (
  WFMathOperation
  | '*'
  | 'x'
  | '/'
);

const operationsMap = new Map([
  ['*', '×'],
  ['x', '×'],
  ['/', '÷'],
  ['sqrt', '√x'],
  ['cbrt', '∛x'],
]);

type CalculateOptions = {
  operand: number;
  operation?: Operation;
};

/**
 * Calculate Action. Performs a number operation on the input and returns the result.
 * @param {Object} options
 * @param {number} [options.operand] A second number to perform the operation on
 * @param {Operation} [options.operation='+'] The operation to apply to the number
 */
const calculate = (
  {
    operand,
    operation = '+',
  }: CalculateOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.math',
  WFWorkflowActionParameters: {
    WFMathOperand: operand,
    WFMathOperation: (operationsMap.get(operation) || operation) as WFMathOperation,
  },
});

export default withUUID(calculate);
