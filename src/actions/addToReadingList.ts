import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

export const identifier = 'is.workflow.actions.readinglist';

/**
 * @action Add to Reading List
 * @section Content Types > Web > Safari
 * @icon Safari
 *
 * Adds URLs passed into the action to your reading list.
 *
 * ```js
 * addToReadingList();
 * ```
 */
const addToReadingList = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

export default addToReadingList;
