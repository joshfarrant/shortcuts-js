import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Comment
 * @section Actions > Scripting >
 * @icon Text
 *
 * This action lets you explain how part of a shortcut works. When run, this action does nothing.
 *
 * ```js
 * // Create a comment
 * comment({
 *   text: 'A very important comment',
 * });
 * ```
 */

const comment = (
  {
    text = '',
  }: {
    /** The body of the comment */
    text?: string,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.comment',
  WFWorkflowActionParameters: {
    WFCommentActionText: text,
  },
});

export default comment;
