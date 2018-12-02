import Aggrandizement from './WF/Aggrandizement';
import AggrandizementCoercionItemClass from './WF/AggrandizementCoercionItemClass';
import AggrandizementPropertyName from './WF/AggrandizementPropertyName';
import Attachment from './WF/Attachment';
import WFSerialization from './WF/WFSerialization';
import WFSerializationType from './WF/WFSerializationType';

type CoercionType = (
  'Anything'
  | 'App Store app'
  | 'Article'
  | 'Boolean'
  | 'Contact'
  | 'Date'
  | 'Dictionary'
  | 'Email address'
  | 'File'
  | 'Image'
  | 'iTunes media'
  | 'iTunes product'
  | 'Location'
  | 'Maps link'
  | 'Media'
  | 'Number'
  | 'PDF'
  | 'Phone number'
  | 'Photo media'
  | 'Place'
  | 'Rich text'
  | 'Safari web page'
  | 'Text'
  | 'URL'
  | 'vCard'
);

const coercionTypesMap = new Map<CoercionType, AggrandizementCoercionItemClass>([
  ['Anything', 'WFContentItem'],
  ['App Store app', 'WFAppStoreAppContentItem'],
  ['Article', 'WFArticleContentItem'],
  ['Boolean', 'WFBooleanContentItem'],
  ['Contact', 'WFContactContentItem'],
  ['Date', 'WFDateContentItem'],
  ['Dictionary', 'WFDictionaryContentItem'],
  ['Email address', 'WFEmailAddressContentItem'],
  ['File', 'WFGenericFileContentItem'],
  ['Image', 'WFImageContentItem'],
  ['iTunes media', 'WFMPMediaContentItem'],
  ['iTunes product', 'WFiTunesProductContentItem'],
  ['Location', 'WFLocationContentItem'],
  ['Maps link', 'WFDCMapsLinkContentItem'],
  ['Media', 'WFAVAssetContentItem'],
  ['Number', 'WFNumberContentItem'],
  ['PDF', 'WFPDFContentItem'],
  ['Phone number', 'WFPhoneNumberContentItem'],
  ['Photo media', 'WFPhotoMediaContentItem'],
  ['Place', 'WFMKMapItemContentItem'],
  ['Rich text', 'WFRichTextContentItem'],
  ['Safari web page', 'WFSafariWebPageContentItem'],
  // ['Text',  null],
  ['URL', 'WFURLContentItem'],
  ['vCard', 'WFVCardContentItem'],
]);

export default class Variable implements WFSerialization {
  Value: Attachment;
  WFSerializationType: WFSerializationType;

  constructor(value: Attachment) {
    this.Value = value;
    this.WFSerializationType = 'WFTextTokenAttachment';
  }

  with(
    options: {
      type?: CoercionType,
      get?: AggrandizementPropertyName,
      dateFormat?: string, // TODO
      timeFormat?: string, // TODO
      customFormat?: string,
      getValueForKey?: string,
    },
  ): Variable {
    const result = new Variable({ ...this.Value });
    const aggrandizements: Aggrandizement[] = [];

    if (options.type) {
      aggrandizements.push({
        CoercionItemClass: coercionTypesMap.get(options.type),
        Type: 'WFCoercionVariableAggrandizement',
      });
    }

    // if (options.get) {
    //   // TODO
    // }
    //
    // if (options.dateFormat) {
    //   // TODO
    // }

    if (options.getValueForKey) {
      aggrandizements.push({
        DictionaryKey: options.getValueForKey,
        Type: 'WFDictionaryValueVariableAggrandizement',
      });
    }

    if (aggrandizements.length > 0) result.Value.Aggrandizements = aggrandizements;
    return result;
  }
}
