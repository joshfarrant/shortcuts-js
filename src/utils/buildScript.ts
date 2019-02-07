import * as allActions from '../actions';
import { decodeShortcut } from './';

import { Script } from '../interfaces/Script';
// import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

// interface ActionObject {
//   identifier?: string;
//   // tslint:disable-next-line no-any
//   default: (opts: any) => WFWorkflowAction | WFWorkflowAction[];
//   // tslint:disable-next-line no-any
//   invert?: (action: WFWorkflowAction | WFWorkflowAction[]) => any;
// }

// interface FormattedAction {
//   [identifier: string]: {
//     name: string;
//     invert?: ActionObject['invert'];
//   };
// }

// const typedActions = allActions as {
//   [name: string]: ActionObject | {
//     [name: string]: ActionObject;
//   };
// };

// {
//   'com.workflow.action.showAlert': {
//     name: 'showAlert',
//   },
//   'com.workflow.action.calculate': {
//     name: 'calculate',
//     invert: () => {},
//   },
//   'com.omz-software.Pythonista.runscript': {
//     name: 'pythonista.editScript',
//     invert: () => {}
//   }
// }

// tslint:disable-next-line no-any
const badger = (a: any, [name, obj]: any[]): any => {
  if (!obj.default) {
    return {
      ...a,
      ...badger(a, [name, obj]),
    };
  }

  if (!obj.identifier) {
    return {
      ...a,
    };
  }

  return [
    ...a,
    [obj.identifier, {
      name,
      invert: obj.invert,
    }],
  ];
};

const test = Object.entries(allActions)
  .reduce(badger);

// console.log('test: ', test);


// const actionsMap = new Map(actionsArray);

/**
 * Builds a script from an shortcut file.
 * @ignore
 */
export const buildScript = async (
  shortcutFile: string,
): Promise<Script> => {
  const shortcut = await decodeShortcut(shortcutFile);

  shortcut.WFWorkflowActions;

  // const invertedActions = actions.map((WFAction) => {
  //   const actionObj = actionsMap.get(WFAction.WFWorkflowActionIdentifier);
  //   if (!actionObj) {
  //     throw new Error('// TODO Fix me!');
  //   }

  //   // const {
  //   //   name,
  //   //   invert,
  //   // } = actionObj;

  //   // const options = invert(WFAction);

  //   return {
  //     name,
  //     options,
  //   };
  // });

  // const imports = {
  //   actions: invertedActions.map(({ name }) => name),
  // };

  return {
    imports: {},
    metadata: {
      glyph: 123,
      color: 456,
    },
    actions: [],
  };
};
