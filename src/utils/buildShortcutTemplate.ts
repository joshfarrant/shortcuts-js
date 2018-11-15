import WFWorkflow from '../interfaces/WF/WFWorkflow';
import WFWorkflowActionsInterface from '../interfaces/WF/WFWorkflowAction';

export const buildShortcutTemplate = (
  actions: WFWorkflowActionsInterface[] = [],
): WFWorkflow => ({
  WFWorkflowClientVersion: '724',
  WFWorkflowClientRelease: '2.1',
  WFWorkflowIcon: {
    WFWorkflowIconStartColor: 1440408063,
    WFWorkflowIconGlyphNumber: 59446,
  },
  WFWorkflowImportQuestions: [],
  WFWorkflowTypes: [
    'NCWidget',
    'WatchKit',
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
  WFWorkflowActions: [...actions],
});
