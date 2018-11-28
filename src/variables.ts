import Attachment from './interfaces/WF/Attachment';

const askWhenRun: Attachment = { Type: 'Ask' };
const clipboard: Attachment = { Type: 'Clipboard' };
const currentDate: Attachment = { Type: 'CurrentDate' };
const shortcutInput: Attachment = { Type: 'ExtensionInput' };

export {
  askWhenRun,
  clipboard,
  currentDate,
  shortcutInput,
};
