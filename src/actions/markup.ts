import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Markup
 * @section Content Types > Photos & Video > Editing
 * @icon Markup
 *
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
