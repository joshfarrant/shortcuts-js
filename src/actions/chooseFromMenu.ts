import * as uuidv4 from 'uuid/v4';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type ChooseFromMenuItem = {
  label: string;
  actions: WFWorkflowAction[];
};

/**
 * Choose From Menu Action. Presents a menu and runs different actions based on which menu was chosen.
 *
 * ```js
 * chooseFromMenu({
 *   items: [{
 *     label: 'Blue',
 *     // An array of actions to perform if 'blue' is selected
 *     actions: [],
 *   }, {
 *     label: 'Green',
 *     // An array of actions to perform if 'green' is selected
 *     actions: [],
 *   }],
 *   prompt: 'Which of these is your favourite colour?',
 * });
 * ```
 */
const chooseFromMenu = (
  options: {
    /** An array of menu items */
    items?: ChooseFromMenuItem[],
    /** The title of the menu */
    prompt?: string,
  },
): WFWorkflowAction[] => {
  const {
    items = [],
    prompt = '',
  } = options;

  const groupingIdentifier = uuidv4();

  return [
    {
      WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
      WFWorkflowActionParameters: {
        WFMenuPrompt: prompt,
        WFControlFlowMode: 0,
        WFMenuItems: items.map(item => item.label),
        GroupingIdentifier: groupingIdentifier,
      },
    },
    ...items.reduce(
      (
        a: WFWorkflowAction[],
        item,
      ) => ([
        ...a,
        {
          WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
          WFWorkflowActionParameters: {
            WFMenuItemTitle: item.label,
            GroupingIdentifier: groupingIdentifier,
            WFControlFlowMode: 1,
          },
        } as WFWorkflowAction,
        ...item.actions,
      ]),
      [],
    ),
    {
      WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
      WFWorkflowActionParameters: {
        GroupingIdentifier: groupingIdentifier,
        WFControlFlowMode: 2,
      },
    },
  ];
};

export default chooseFromMenu;
