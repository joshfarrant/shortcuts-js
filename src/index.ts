import {
  buildShortcut as buildShortcutImported,
  withVariables as withVariablesImported,
} from './utils';
import {
  actionOutput,
  askWhenRun,
  clipboard,
  currentDate,
  shortcutInput,
  variable,
} from './utils/variables';

export const buildShortcut = buildShortcutImported;
export const withVariables = withVariablesImported;
export {
  actionOutput,
  askWhenRun,
  clipboard,
  currentDate,
  shortcutInput,
  variable,
};
