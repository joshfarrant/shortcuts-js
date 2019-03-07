import * as uuidv4 from 'uuid/v4';

import WFCondition from '../interfaces/WF/WFCondition';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';
import { withActionOutput } from '../utils';

/** @ignore */
const conditionMap = new Map([
  ['Contains', undefined],
  ['=', 'Equals'],
  ['<', 'Is Less Than'],
  ['>', 'Is Greater Than'],
]);

/**
 * @action If
 * @section Actions > Scripting > Control Flow
 * @icon Scripting
 *
 * Tests if any item passed as input matches the specified condition, and if so, runs the actions inside. Otherwise, the actions under “Otherwise” are run.
 *
 * ```js
 * conditional({
 *   ifTrue: [
 *     comment({
 *       text: 'Do something when true',
 *     }),
 *   ],
 *   ifFalse: [
 *     comment({
 *       text: 'Do something different when false',
 *     }),
 *   ],
 *   input: '<',
 *   value: 27,
 * });
 * ```
 */

const conditional = (
  {
    ifTrue = [],
    ifFalse = [],
    input = 'Contains',
    value = 'example',
  }: {
    /** An array of actions to perform if condition is true */
    ifTrue?: WFWorkflowAction[],
    /** An array of actions to perform if condition is false */
    ifFalse?: WFWorkflowAction[],
    /** The test to perform on the input */
    input?: (
      WFCondition
      | 'Contains'
      | '='
      | '<'
      | '>'
    ),
    /** The value to test the input against */
    value?: string | number,
  },
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

export default withActionOutput(conditional);
