import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Show in iTunes Store
 * @section Content Types > Music > iTunes Store
 * @icon iTunes
 *
 * Shows the iTunes products or App Store apps passed as input in a store sheet. This is useful with the Search iTunes Store and Search App Store actions.
 *
 * ```js
 * showInItunesStore();
 * ```
 */

const showInItunesStore = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.showinstore',
  WFWorkflowActionParameters: {},
});

export default showInItunesStore;
