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

const repeatIndex = (
  level?: number,
): Variable => new Variable({
  VariableName: level && level !== 1 ? `Repeat Index ${level}` : 'Repeat Index',
  Type: 'Variable',
});

export {
  askWhenRun,
  clipboard,
  currentDate,
  repeatIndex,
  shortcutInput,
};
