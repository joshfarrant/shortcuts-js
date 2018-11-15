import WFWorkflow from '../../src/interfaces/WF/WFWorkflow';
import WFWorkflowAction from '../../src/interfaces/WF/WFWorkflowAction';

export const testActions: WFWorkflowAction[] = [
  {
    WFWorkflowActionIdentifier: 'is.workflow.actions.comment',
    WFWorkflowActionParameters: {
      WFCommentActionText: 'This is a test!',
    },
  }, {
    WFWorkflowActionIdentifier: 'is.workflow.actions.number',
    WFWorkflowActionParameters: {
      WFNumberActionNumber: 42,
    },
  }, {
    WFWorkflowActionIdentifier: 'is.workflow.actions.math',
    WFWorkflowActionParameters: {
      WFMathOperand: 19,
      WFMathOperation: '+',
    },
  },
];

export const testShortcutNoActions: WFWorkflow = {
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
  WFWorkflowActions: [],
};

export const testShortcutWithActions: WFWorkflow = {
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
  WFWorkflowActions: testActions,
};
