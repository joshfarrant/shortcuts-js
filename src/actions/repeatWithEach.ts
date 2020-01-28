import * as uuidv4 from 'uuid/v4';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';
import { withActionOutput } from '../utils';

import WFSerialization from '../interfaces/WF/WFSerialization';
/**
 * @action RepeatWithEach
 * @section Actions > Scripting > Control Flow
 * @icon Scripting
 *
 * Takes a list of items as input, and runs the contained actions once for each item in the list.
 *
 * ```js
 *  repeatWithEach({
 *    actions: [showResult({})]
 *  })
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
