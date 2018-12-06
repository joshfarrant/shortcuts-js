import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Edits an image or PDF with Markup.
 *
 * ```js
 * markup();
 * ```
 */
const markup = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.avairyeditphoto',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(markup);
