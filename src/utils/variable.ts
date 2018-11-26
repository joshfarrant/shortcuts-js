import Attachment from '../interfaces/WF/Attachment';

/**
 * Creates a Variable.
 * @param {string} name
 */
export const variable = (name: string): Attachment => ({
  VariableName: name,
  Type: 'Variable',
});
