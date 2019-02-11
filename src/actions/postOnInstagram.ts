import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Post on Instagram
 * @section Content Types > Sharing > Instagram
 * @icon Instagram
 *
 * Opens the photo passed into this action in the Instagram app and copies the caption to the clipboard.
 *
 * ```js
 * postOnInstagram({
 *  caption: 'My caption',
 * });
 * ```
 */

const postOnInstagram = (
  {
    caption = '',
  }: {
    /** Photo caption */
    caption?: string,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'com.burbn.instagram.openin',
  WFWorkflowActionParameters: {
    InstagramCaption: caption,
  },
});

export default postOnInstagram;
