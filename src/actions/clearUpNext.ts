import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.clearupnext';

/**
 * @action Clear Up Next
 * @section Content Types > Music > Music
 * @icon Music
 *
 * Clears all the music in your Up Next queue.
 *
 * ```js
 * clearUpNext();
 * ```
 */
const clearUpNext = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

clearUpNext.identifier = identifier;
clearUpNext.invert = invert;

export default clearUpNext;
