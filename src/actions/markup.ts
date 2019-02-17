import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.avairyeditphoto';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

markup.identifier = identifier;
markup.invert = invert;

export default withActionOutput(markup);
