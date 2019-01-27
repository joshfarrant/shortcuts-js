import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Adds URLs passed into the action to your reading list.
 *
 * ```js
 * addToReadingList();
 * ```
 *
 * @action Add to Reading List
 * @section Content Types > Web > Safari
 * @icon Safari
 */
const addToReadingList = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.readinglist',
  WFWorkflowActionParameters: {},
});

export default addToReadingList;
