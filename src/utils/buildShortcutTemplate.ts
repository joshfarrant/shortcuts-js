import { flatten } from './flatten';

import BuildShortcutOptions from '../interfaces/BuildShortcutOptions';
import WFWorkflow from '../interfaces/WF/WFWorkflow';
import WFWorkflowActionsInterface from '../interfaces/WF/WFWorkflowAction';
import WFWorkflowType from '../interfaces/WF/WFWorkflowType';

/** @ignore */
export const buildShortcutTemplate = (
  actions: WFWorkflowActionsInterface[] = [],
  options: BuildShortcutOptions,
): WFWorkflow => ({
  WFWorkflowClientVersion: '724',
  WFWorkflowClientRelease: '2.1',
  WFWorkflowIcon: {
    WFWorkflowIconStartColor: options.icon.color,
    WFWorkflowIconGlyphNumber: options.icon.glyph,
  },
  WFWorkflowImportQuestions: [],
  WFWorkflowTypes: [
    'WatchKit',
    ...(options.showInWidget ? ['NCWidget' as WFWorkflowType] : []),
  ],
  WFWorkflowInputContentItemClasses: [
    'WFAppStoreAppContentItem',
    'WFArticleContentItem',
    'WFContactContentItem',
    'WFDateContentItem',
    'WFEmailAddressContentItem',
    'WFGenericFileContentItem',
    'WFImageContentItem',
    'WFiTunesProductContentItem',
    'WFLocationContentItem',
    'WFDCMapsLinkContentItem',
    'WFAVAssetContentItem',
    'WFPDFContentItem',
    'WFPhoneNumberContentItem',
    'WFRichTextContentItem',
    'WFSafariWebPageContentItem',
    'WFStringContentItem',
    'WFURLContentItem',
  ],
  WFWorkflowActions: flatten(actions),
});
