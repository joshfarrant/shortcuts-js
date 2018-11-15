/** @module actions */

import * as uuidv4 from 'uuid/v4';

import WFCondition from '../interfaces/WF/WFCondition';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @typedef {(Condition|''|'Contains'|'='|'<'|'>')} Operation
 */

type Condition = (
  WFCondition
  | ''
  | 'Contains'
  | '='
  | '<'
  | '>'
);

const conditionMap = new Map([
  ['', undefined],
  ['Contains', undefined],
  ['=', 'Equals'],
  ['<', 'Is Less Than'],
  ['>', 'Is Greater Than'],
]);

type ConditionalOptions = {
  ifTrue?: WFWorkflowAction[],
  ifFalse?: WFWorkflowAction[],
  input?: Condition,
  value?: string | number,
};

/**
 * If Action. Tests if any item passed as input matches the specified condition, and if so, runs the actions inside. Otherwise, the actions under "Otherwise" are run.
 * @param {Object} [options]
 * @param {Action[]} [options.ifTrue=[]]
 * @param {Action[]} [options.ifFalse=[]]
 * @param {Condition} [options.input]
 * @param {string|number} [options.value]
 */
const conditional = (
  {
    ifTrue = [],
    ifFalse = [],
    input,
    value,
  }: ConditionalOptions,
): WFWorkflowAction[] => {
  const groupingIdentifier = uuidv4();

  const ifAction: WFWorkflowAction = {
    WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
    WFWorkflowActionParameters: {
      GroupingIdentifier: groupingIdentifier,
      WFControlFlowMode: 0, // Start If
    },
  };

  // Add WFCondition if we've got input
  if (input) {
    const condition = (conditionMap.get(input) || input) as WFCondition;
    ifAction.WFWorkflowActionParameters.WFCondition = condition;
  }

  // Add correct property for string or number value
  if (value) {
    if (typeof value === typeof 0) {
      ifAction.WFWorkflowActionParameters.WFNumberValue = value as number;
    } else {
      ifAction.WFWorkflowActionParameters.WFConditionalActionString = value as string;
    }
  }

  // Open the 'if' block
  let actionArr: WFWorkflowAction[] = [
    ifAction,
  ];

  // If we've got some ifTrue actions, append them
  if (ifTrue.length > 0) {
    actionArr = [
      ...actionArr,
      ...ifTrue,
    ];
  }

  // If we've got some ifFalse actions, add an 'else' and append the ifFalse actions
  if (ifFalse.length > 0) {
    actionArr = [
      ...actionArr,
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          GroupingIdentifier: groupingIdentifier,
          WFControlFlowMode: 1, // Else
        },
      },
      ...ifFalse,
    ];
  }

  // Add the final action to close the 'if' block
  actionArr = [
    ...actionArr,
    {
      WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
      WFWorkflowActionParameters: {
        GroupingIdentifier: groupingIdentifier,
        WFControlFlowMode: 2, // End If
      },
    },
  ];

  return actionArr;
};

export default conditional;
