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
    WFWorkflowIconStartColor: 4274264319,
    WFWorkflowIconGlyphNumber: 59446,
  },
  WFWorkflowImportQuestions: [],
  WFWorkflowTypes: [
    'WatchKit',
    'NCWidget',
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

export const testShortcutNoActionsNoWidget: WFWorkflow = {
  WFWorkflowClientVersion: '724',
  WFWorkflowClientRelease: '2.1',
  WFWorkflowIcon: {
    WFWorkflowIconStartColor: 4274264319,
    WFWorkflowIconGlyphNumber: 59446,
  },
  WFWorkflowImportQuestions: [],
  WFWorkflowTypes: [
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
    WFWorkflowIconStartColor: 4274264319,
    WFWorkflowIconGlyphNumber: 59446,
  },
  WFWorkflowImportQuestions: [],
  WFWorkflowTypes: [
    'WatchKit',
    'NCWidget',
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

export const testShortcutWithModifiedOptions: WFWorkflow = {
  WFWorkflowClientVersion: '724',
  WFWorkflowClientRelease: '2.1',
  WFWorkflowIcon: {
    WFWorkflowIconStartColor: 3980825855,
    WFWorkflowIconGlyphNumber: 59769,
  },
  WFWorkflowImportQuestions: [],
  WFWorkflowTypes: [
    'WatchKit',
    'NCWidget',
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
