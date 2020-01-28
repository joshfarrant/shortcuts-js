import * as uuidv4 from 'uuid/v4';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';
import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
/**
 * @action RepeatWithEach
 * @section Actions > Scripting > Control Flow
 * @icon Scripting
 *
 * Repeats the contained actions, running them the specified number of times,
 * but, user should use the variable `Repeat Item` to get the current item.
 *
 * ```js
 * const reference = actionOutput();
 * const actions = [
 *   list({ value: ["1", "2"] }, reference),
 *   repeatWithEach({
 *     items: reference,
 *     actions: [showResult({ text: withVariables`${repeatItem()}` })]
 *   })
 * ];
 * ```
 */
const repeatWithEach = ({
  items,
  actions = [],
}: {
  /** The workflow actions inside the repeat block */
  items?: WFSerialization;
  actions?: WFWorkflowAction[];
}): WFWorkflowAction[] => {
  const groupingIdentifier = uuidv4();
  return [
    {
      WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.each',
      WFWorkflowActionParameters: {
        WFControlFlowMode: 0,
        GroupingIdentifier: groupingIdentifier,
        ...(items && { WFInput: items }),
      },
    },
    ...actions,
    {
      WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.each',
      WFWorkflowActionParameters: {
        GroupingIdentifier: groupingIdentifier,
        WFControlFlowMode: 2,
      },
    },
  ];
};

export default withActionOutput(repeatWithEach);
