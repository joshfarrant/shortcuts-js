import Variable from '../interfaces/Variable';

/**
 * Creates a Variable.
 *
 * ```js
 * const myVar = variable('My Variable');
 * ```
 */
export const variable = (
  /** The name of the Variable */
  name: string,
): Variable => new Variable({
  VariableName: name,
  Type: 'Variable',
});
