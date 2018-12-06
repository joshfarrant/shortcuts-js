import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Show in iTunes Store Action. Shows the iTunes products of App Store apps passed as inputin a store sheet.
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
