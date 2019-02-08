import * as uuidv4 from 'uuid/v4';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface ChooseFromMenuItem {
  label: string;
  actions: WFWorkflowAction[];
}

interface Options {
  /** An array of menu items */
  items?: ChooseFromMenuItem[];
  /** The title of the menu */
  prompt?: string;
}

export const identifier = 'is.workflow.actions.choosefrommenu';

/**
 * @action Choose from Menu
 * @section Actions > Scripting > Control Flow
 * @icon Scripting
 *
 * Presents a menu and runs different actions based on which menu item was chosen.
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
  {
    items = [],
    prompt = '',
  }: Options,
): WFWorkflowAction[] => {
  const groupingIdentifier = uuidv4();

  return [
    {
      WFWorkflowActionIdentifier: identifier,
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
          WFWorkflowActionIdentifier: identifier,
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
      WFWorkflowActionIdentifier: identifier,
      WFWorkflowActionParameters: {
        GroupingIdentifier: groupingIdentifier,
        WFControlFlowMode: 2,
      },
    },
  ];
};

export default chooseFromMenu;
