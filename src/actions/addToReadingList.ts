import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Add to Reading List
 * @section Actions > Web > Safari
 * @icon Safari
 *
 * Adds URLs passed into the action to your reading list.
 *
 * ```js
 * addToReadingList();
 * ```
 */

const addToReadingList = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.readinglist',
  WFWorkflowActionParameters: {},
});

export default addToReadingList;
