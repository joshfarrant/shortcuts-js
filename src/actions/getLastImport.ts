import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.getlatestphotoimport';

/**
 * @action Get Last Import
 * @section Content Types > Photos & Video > Photos
 * @icon Photos
 *
 * Gets the most recent photo import from the Photos app.
 *
 * ```js
 * getLastImport();
 * ```
 */
const getLastImport = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

getLastImport.identifier = identifier;
getLastImport.invert = invert;

export default getLastImport;
