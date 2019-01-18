import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * This action lets you explain how part of a shortcut works. When run, this action does nothing.
 *
 * ```js
 * // Create a comment
 * comment({
 *   text: 'A very important comment',
 * });
 * ```
 *
 * @action Comment
 * @section Actions/Scripting/_
 */
const comment = (
  options: {
    /** The body of the comment */
    text?: string,
  },
): WFWorkflowAction => {
  const {
    text = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.comment',
    WFWorkflowActionParameters: {
      WFCommentActionText: text,
    },
  };
};

export default comment;

export const icon = 79;
