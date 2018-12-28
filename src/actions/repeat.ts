import * as uuidv4 from 'uuid/v4';

import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Repeat Action. Repeat a set of actions
 *
 * ```js
 * runShortcut({
 *   name: 'My Great Shortcut',
 *   show: true,
 * });
 * ```
 */
const repeat = (
  options: {
    /** The integer number of times to loop */
    count?: WFSerialization | number,
    /** The workflow actions inside the repeat block */
    actions?: WFWorkflowAction[],
  },
): WFWorkflowAction[] => {
  const {
    actions = [],
    count = 1,
  } = options;
  const groupingIdentifier = uuidv4();
  return [
    {
      WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.count',
      WFWorkflowActionParameters: {
        WFRepeatCount: typeof count === 'number' ?
          Math.floor(count as number) : count as WFSerialization,
        GroupingIdentifier: groupingIdentifier,
        WFControlFlowMode: 0,
      },
    },
    ...actions,
    {
      WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.count',
      WFWorkflowActionParameters: {
        GroupingIdentifier: groupingIdentifier,
        WFControlFlowMode: 2,
      },
    },
  ];
};

export default repeat;
