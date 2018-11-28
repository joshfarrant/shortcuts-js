/** @module utils */

import {
  buildShortcutTemplate,
  encodeShortcut,
} from './';

import WFWorkflowActionsInterface from '../interfaces/WF/WFWorkflowAction';

/**
 * Builds a shortcut from an array of actions.
 * @param {Array} [actions=[]] An array of actions
 * @return {string} The built shortcut
 */
export const buildShortcut = (
  actions: WFWorkflowActionsInterface[] = [],
  options?: {
    icon?: {
      color?: number,
      glyph?: number,
    },
  },
): string => {
  const completeOptions = {
    icon: {
      color: 4274264319, // Yellow
      glyph: 59446, // Keyboard
    },
  };

  if (options && options.icon) {
    completeOptions.icon = {
      ...completeOptions.icon,
      ...options.icon,
    };
  }

  const template = buildShortcutTemplate(actions, completeOptions);
  const shortcut = encodeShortcut(template);
  return shortcut;
};
