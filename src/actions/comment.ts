/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

type CommentOptions = {
  text?: string;
};

/**
 * Comment Action. This action lets you explain how part of a shortcut works. When run, this action does nothing.
 * @param {Object} options
 * @param {string} [options.text='']
 */
const comment = (
  {
    text = '',
  }: CommentOptions,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.comment',
  WFWorkflowActionParameters: {
    WFCommentActionText: text,
  },
});

export default comment;
