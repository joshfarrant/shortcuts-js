import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Add to Reading List Action. Adds URLs passed into the action to your reading list.
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
