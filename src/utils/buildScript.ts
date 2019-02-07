import {
  decodeShortcut,
} from './';

import * as allActions from '../actions';
import { Script } from '../interfaces/Script';

const actionsMap = new Map(
  Object.entries(allActions)
  .reduce(
      // tslint:disable-next-line no-any
      (a: any[], [name, obj]: any[]): any[] => {
        if (!obj.identifier) {
          return a;
        }

        return [
          ...a,
          [obj.identifier, {
            name,
            invert: obj.invert,
          }],
        ];
      },
      [],
    ),
);

/**
 * Builds a script from an shortcut file.
 * @ignore
 */
export const buildScript = async (
  shortcutFile: string,
): Promise<Script> => {
  const shortcut = await decodeShortcut(shortcutFile);

  const actions = shortcut.WFWorkflowActions;

  const invertedActions = actions.map((WFAction) => {
    const actionObj = actionsMap.get(WFAction.WFWorkflowActionIdentifier);
    if (!actionObj) {
      throw new Error('// TODO Fix me!');
    }

    const {
      name,
      invert,
    } = actionObj;

    const options = invert(WFAction);

    return {
      name,
      options,
    };
  });

  const imports = {
    actions: invertedActions.map(({ name }) => name),
  };

  return {
    imports,
    metadata: {
      glyph: 123,
      color: 456,
    },
    actions: invertedActions,
  };
};
