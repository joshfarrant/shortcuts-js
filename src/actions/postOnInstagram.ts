import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  caption?: string;
}

const identifier = 'com.burbn.instagram.openin';

/**
 * @action Post on Instagram
 * @section Content Types > Sharing > Instagram
 * @icon Instagram
 *
 * Post on Instagram Action. Opens the photo passed into this action in the Instagram app and copies the caption to the clipboard.
 *
 * ```js
 * postOnInstagram({
 *  caption: 'My caption',
 * });
 * ```
 */
const postOnInstagram = (
  {
    /** Photo caption */
    caption = '',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {
    InstagramCaption: caption,
  },
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  caption: WFAction.WFWorkflowActionParameters.InstagramCaption,
});

postOnInstagram.identifier = identifier;
postOnInstagram.invert = invert;

export default postOnInstagram;
