import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.file.getlink';

/**
 * @action Get Link to File
 * @section Content Types > Documents > File Storage
 * @icon Documents
 *
 * Gets a public link to the file passed into the action.
 *
 * ```js
 * getLinkToFile();
 * ```
 */
const getLinkToFile = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getLinkToFile.identifier = identifier;
getLinkToFile.invert = invert;

export default withActionOutput(getLinkToFile);
