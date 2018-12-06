import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Link to File Action. Gets a public link to the file passed into the action.
 *
 * ```js
 * getLinkToFile();
 * ```
 */

const getLinkToFile = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.file.getlink',
  WFWorkflowActionParameters: {},
});

export default getLinkToFile;
