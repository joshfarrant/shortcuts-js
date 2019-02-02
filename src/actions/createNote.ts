import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Create Note
 * @section Actions > Notes
 * @icon Notes
 *
 * Create Note Action. Shares the input with Notes.
 *
 * ```js
 * createNote();
 * ```
 */

const createNote = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'com.apple.mobilenotes.SharingExtension',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(createNote);
