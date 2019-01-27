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
 * @section Actions > Scripting >
 * @icon Text
 */
const comment = (
  {
    /** The body of the comment */
    text = '',
  }: {
    text?: string,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.comment',
  WFWorkflowActionParameters: {
    WFCommentActionText: text,
  },
});

export default comment;
