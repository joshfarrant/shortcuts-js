/** @module actions */

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Post on Instagram Action. Opens the photo passed into this action in the Instagram app and copies the caption to the clipboard.
 *
 * ```js
 * postOnInstagram({
 *  caption: 'My caption',
 * });
 * ```
 */
const postOnInstagram = (
  options: {
    /** Photo caption */
    caption?: string,
  },
): WFWorkflowAction => {
  const {
    caption = '',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'com.burbn.instagram.openin',
    WFWorkflowActionParameters: {
      InstagramCaption: caption,
    },
  };
};

export default postOnInstagram;
