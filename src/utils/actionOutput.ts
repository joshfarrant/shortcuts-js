import * as uuidv4 from 'uuid/v4';

import Variable from '../interfaces/Variable';

/**
 * Creates a Magic Variable to be used as action output.
 *
 * ```js
 * const magic = actionOutput('My Magic Variable');
 * ```
 */
export const actionOutput = (
  /** The custom name of the Magic Variable */
  name?: string,
): Variable => new Variable({
  ...(name && { OutputName: name }),
  OutputUUID: uuidv4(),
  Type: 'ActionOutput',
});
