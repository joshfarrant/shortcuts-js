import * as allActions from '../actions';
import { ICON } from '../meta';
import { decodeShortcut } from './';

import { Script } from '../interfaces/Script';
import WFWorkflow from '../interfaces/WF/WFWorkflow';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

// TODO Can the 'any' be removed from this?
interface Import {
  // tslint:disable-next-line no-any
  (options: any): WFWorkflowAction | WFWorkflowAction[];
  invert?: (action?: WFWorkflowAction | WFWorkflowAction[]) => {};
  identifier?: string;
}

interface Imports {
  [name: string]: Import | Imports;
}

interface FormattedAction {
  name: string;
  invert: (action: WFWorkflowAction) => {};
}

interface FormattedActions {
  [identifier: string]: FormattedAction;
}

const buildActionObject = (
  obj: Imports,
  name: string = '',
) => (
  Object
    .entries(obj)
    .reduce(
    (a, [name2, obj2]): FormattedActions => {
      if (typeof obj2 !== 'function') {
        // Is a nested import, just call this function with the new object
        return {
          ...a,
          ...buildActionObject(obj2 as Imports, name2),
        };
      }

      if (!obj2.identifier) {
        // It's no use to us without an identifier
        return a;
      }

      return {
        ...a,
        [obj2.identifier]: {
          name: name ? `${name}.${name2}` : name2,
          invert: obj2.invert || (() => ({})),
        },
      };
    },
    {})
);

const getActions = (shortcut: WFWorkflow): Script['actions'] => {
  const actions = shortcut.WFWorkflowActions;

  const actionsMap: Map<string, FormattedAction> = new Map(
    Object.entries(buildActionObject(allActions as Imports)),
  );

  return actions.map((WFAction) => {
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
};

const getImports = (actions: Script['actions']): Script['imports'] => {
  const importActions = actions.map(({ name }) => name);

  const dedupedImportActions = [
    ...new Set(importActions),
  ];

  return {
    actions: dedupedImportActions,
  };
};

const getIconColor = (shortcut: WFWorkflow): string => {
  let iconColor = shortcut.WFWorkflowIcon.WFWorkflowIconStartColor;

  // If is negative
  if (iconColor < 0) {
    iconColor += Math.pow(2, 32);
  }

  const color = Object
    .entries(ICON.COLORS)
    .find(c => (
      c[1] === iconColor
    ));

  return color ? color[0] : '';
};

const getIconGlyph = (shortcut: WFWorkflow): string => {
  const glyph = Object
    .entries(ICON.GLYPHS)
    .find(g => (
      g[1] === shortcut.WFWorkflowIcon.WFWorkflowIconGlyphNumber
    ));

  return glyph ? glyph[0] : '';
};

const getMetadata = (shortcut: WFWorkflow): Script['metadata'] => ({
  glyph: getIconGlyph(shortcut),
  color: getIconColor(shortcut),
});

/**
 * Builds a script from an shortcut file.
 */
export const buildScript = async (
  shortcutFile: string,
): Promise<Script> => {
  const shortcut = await decodeShortcut(shortcutFile);

  const metadata = getMetadata(shortcut);
  const actions = getActions(shortcut);
  const imports = getImports(actions);

  return {
    imports,
    metadata,
    actions,
  };
};
