import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.showinstore';

/**
 * @action Show in iTunes Store
 * @section Content Types > Music > iTunes Store
 * @icon iTunes
 *
 * Shows the iTunes products or App Store apps passed as input in a store sheet. This is useful with the Search iTunes Store and Search App Store actions.
 *
 * ```js
 * showInITunesStore();
 * ```
 */
const showInITunesStore = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

showInITunesStore.identifier = identifier;
showInITunesStore.invert = invert;

export default showInITunesStore;
