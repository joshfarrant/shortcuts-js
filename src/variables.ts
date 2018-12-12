import Variable from './interfaces/Variable';

const askWhenRun: Variable = new Variable({
  Type: 'Ask',
});

const clipboard: Variable = new Variable({
  Type: 'Clipboard',
});

const currentDate: Variable = new Variable({
  Type: 'CurrentDate',
});

const shortcutInput: Variable = new Variable({
  Type: 'ExtensionInput',
});

export {
  askWhenRun,
  clipboard,
  currentDate,
  shortcutInput,
};
