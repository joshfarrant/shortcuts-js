import * as uuidv4 from 'uuid/v4';

import Attachment from '../interfaces/WF/Attachment';

const askWhenRun: Attachment = { Type: 'Ask' };
const clipboard: Attachment = { Type: 'Clipboard' };
const currentDate: Attachment = { Type: 'CurrentDate' };
const shortcutInput: Attachment = { Type: 'ExtensionInput' };

/**
 * Creates a Magic Variable to be used as action output.
 * @param {string} [name]
 */
const actionOutput = (name?: string): Attachment => ({
  ...(name && { OutputName: name }),
  OutputUUID: uuidv4(),
  Type: 'ActionOutput',
});

/**
 * Creates a Variable.
 * @param {string} name
 */
const variable = (name: string): Attachment => ({
  VariableName: name,
  Type: 'Variable',
});

export {
  actionOutput,
  askWhenRun,
  clipboard,
  currentDate,
  shortcutInput,
  variable,
};
