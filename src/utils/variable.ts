import Attachment from '../interfaces/WF/Attachment';

/**
 * Creates a Variable.
 * @ignore
 */
export const variable = (name: string): Attachment => ({
  VariableName: name,
  Type: 'Variable',
});
