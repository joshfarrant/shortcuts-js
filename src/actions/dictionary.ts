import { buildSerialization } from '../utils/buildSerialization';
import { withActionOutput } from '../utils/withActionOutput';

import { ValueObject } from '../interfaces/Value';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Dictionary
 * @section Actions > Scripting > Dictionaries
 * @icon Scripting
 *
 * Passes the specified list of key-value pairs to the next action as a dictionary
 *
 * ```js
 * // Create a dictionary
 * dictionary({
 *   value: {
 *     hello: 'world!',
 *     myNum: 7,
 *     myArray: ['a', 'b', 'c', 'etc'],
 *     myObj: {
 *       anotherString: 'How deep does this thing go?',
 *     }
 *   },
 * });
 * ```
 */

const dictionary = (
  {
    value = {},
  }: {
    /** The dictionary object */
    value?: ValueObject,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.dictionary',
  WFWorkflowActionParameters: {
    // If value is an empty object, just return an empty object
    ...(Object.keys(value).length === 0 ? {} : {
      WFItems: buildSerialization(value),
    }),
  },
});

export default withActionOutput(dictionary);
