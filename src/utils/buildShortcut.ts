import {
  buildShortcutTemplate,
  encodeShortcut,
} from './';

import WFWorkflowActionsInterface from '../interfaces/WF/WFWorkflowAction';

/**
 * Builds a shortcut from an array of actions.
 * @ignore
 */
export const buildShortcut = (
  actions: WFWorkflowActionsInterface[] = [],
  options?: {
    icon?: {
      color?: number,
      glyph?: number,
    },
    showInWidget?: boolean,
  },
): string => {
  const completeOptions = {
    icon: {
      color: 4274264319, // Yellow
      glyph: 59446, // Keyboard
    },
    showInWidget: true,
  };

  // Map to internal build options
  if (options) {
    if (options.icon) {
      completeOptions.icon = {
        ...completeOptions.icon,
        ...options.icon,
      };
    }

    if (options.showInWidget === false) {
      completeOptions.showInWidget = false;
    }
  }

  const template = buildShortcutTemplate(actions, completeOptions);
  const shortcut = encodeShortcut(template);
  return shortcut;
};
