import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  text?: string;
}

const identifier = 'is.workflow.actions.comment';

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
    /** The comment text */
    text = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    WFCommentActionText: text,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  text: WFAction.WFWorkflowActionParameters.WFCommentActionText,
});

comment.identifier = identifier;
comment.invert = invert;

export default comment;
