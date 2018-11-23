/** @module actions */

import * as uuidv4 from 'uuid/v4';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type ChooseFromMenuItem = {
  label: string;
  actions: WFWorkflowAction[];
};

/**
 * Choose From Menu Action. Presents a menu and runs different actions based on which menu was chosen.
 */
const chooseFromMenu = (
  options: {
    /** Defaults to [] */
    items?: ChooseFromMenuItem[],
    /** Defaults to '' */
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
