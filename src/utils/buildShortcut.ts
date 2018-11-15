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
): string => {
  const template = buildShortcutTemplate(actions);
  const shortcut = encodeShortcut(template);
  return shortcut;
};
