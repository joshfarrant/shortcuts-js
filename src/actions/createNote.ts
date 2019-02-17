import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'com.apple.mobilenotes.SharingExtension';

/**
 * @action Create Note
 * @section Content Types > Sharing > Notes
 * @icon Notes
 *
 * Create Note Action. Shares the input with Notes.
 *
 * ```js
 * createNote();
 * ```
 */
const createNote = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

createNote.identifier = identifier;
createNote.invert = invert;

export default withActionOutput(createNote);
