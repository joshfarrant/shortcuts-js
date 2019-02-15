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

const identifier = 'is.workflow.actions.choosefrommenu';

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

const invert = (
  WFAction: WFWorkflowAction[],
): Options => {
  const firstAction = WFAction[0];
  const options = {
    prompt: firstAction.WFWorkflowActionParameters.WFMenuPrompt,
  };

  const menuItems = firstAction.WFWorkflowActionParameters.WFMenuItems;

  if (!menuItems || menuItems.length === 0) {
    // If there are no items, no need to continue
    return {
      ...options,
      items: [],
    };
  }

  const groupingIdentifier = firstAction.WFWorkflowActionParameters.GroupingIdentifier;

  if (!groupingIdentifier) {
    // This _should_ never happen...
    return {
      ...options,
      items: [],
    };
  }

  const menuActions = WFAction
    .slice(1, -1) // Remove first and last actions
    .reduce(
      (a: ChooseFromMenuItem[], c: WFWorkflowAction) => {
        const params = c.WFWorkflowActionParameters;
        if (params.GroupingIdentifier && params.GroupingIdentifier > groupingIdentifier) {
          // New item
          return [
            ...a,
            {
              label: params.WFMenuItemTitle,
              actions: [],
            },
          ] as ChooseFromMenuItem[];
        }

        // Continuation of previous item

        // Remove and return last item in a
        const lastItem = a.pop();

        if (!lastItem) {
          // This should never happen, but I want to keep TypeScript happy
          return [];
        }

        return [
          ...a,
          {
            ...lastItem,
            actions: [
              ...lastItem.actions,
              c,
            ],
          },
        ] as ChooseFromMenuItem[];
      },
      [],
    );

  return {
    ...options,
    items: menuActions,
  };
};

chooseFromMenu.identifier = identifier;
chooseFromMenu.invert = invert;

export default chooseFromMenu;
