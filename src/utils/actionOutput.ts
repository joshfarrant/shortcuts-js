import * as uuidv4 from 'uuid/v4';

import Attachment from '../interfaces/WF/Attachment';

/**
 * Creates a Magic Variable to be used as action output.
 * @param {string} [name]
 */
export const actionOutput = (name?: string): Attachment => ({
  ...(name && { OutputName: name }),
  OutputUUID: uuidv4(),
  Type: 'ActionOutput',
});
