import Variable from '../interfaces/Variable';

/**
 * Creates a Variable.
 * @ignore
 */
export const variable = (name: string): Variable => new Variable({
  VariableName: name,
  Type: 'Variable',
});
