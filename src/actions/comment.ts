import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  /** The body of the comment */
  text?: string;
}

export const identifier = 'is.workflow.actions.comment';

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
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFCommentActionText: text,
  },
});

export const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  text: WFAction.WFWorkflowActionParameters.WFCommentActionText,
});

export default comment;
