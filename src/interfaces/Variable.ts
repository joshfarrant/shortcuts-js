import Aggrandizement from './WF/Aggrandizement';
import AggrandizementCoercionItemClass from './WF/AggrandizementCoercionItemClass';
import AggrandizementPropertyName from './WF/AggrandizementPropertyName';
import Attachment from './WF/Attachment';
import WFDateFormatStyle from './WF/WFDateFormatStyle';
import WFSerialization from './WF/WFSerialization';
import WFSerializationType from './WF/WFSerializationType';
import WFTimeFormatStyle from './WF/WFTimeFormatStyle';

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

/** @ignore */
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

  /**
   * Method that can be applied to variables, magic variables and global variables.
   * It creates an aggrandized copy of the variable, allowing for type coercion and
   * subproperty access.
   *
   * ```js
   * // clipboard contains 'Monday at seven o'clock', returns '19:00'
   * clipboard.with({
   *   type: 'Date',
   *   dateFormat: 'Custom',
   *   customFormat: 'HH:mm',
   * });
   * ```
   */
  with(
    options: {
      type?: CoercionType,
      get?: AggrandizementPropertyName,
      dateFormat?: WFDateFormatStyle,
      timeFormat?: WFTimeFormatStyle,
      customFormat?: string,
      getValueForKey?: string,
    },
  ): Variable {
    const {
      type,
      // get,
      dateFormat,
      timeFormat,
      customFormat,
      getValueForKey,
    } = options;

    const result = new Variable({ ...this.Value });
    const aggrandizements: Aggrandizement[] = [];

    if (type) {
      aggrandizements.push({
        CoercionItemClass: coercionTypesMap.get(type),
        Type: 'WFCoercionVariableAggrandizement',
      });
    }

    // if (options.get) {
    //   // TODO
    // }

    if (dateFormat) {
      aggrandizements.push({
        WFDateFormatStyle: dateFormat === 'How Long Ago/Until' ? 'Relative' : dateFormat,
        ...(
          dateFormat !== 'Custom' &&
          dateFormat !== 'RFC 2822' &&
          dateFormat !== 'ISO 8601' &&
          dateFormat !== 'How Long Ago/Until' && { WFTimeFormatStyle: timeFormat }
        ),
        ...(dateFormat === 'Custom' && { WFDateFormat: customFormat }),
        ...(dateFormat === 'Relative' && { WFRelativeDateFormatStyle: 'Short' }),
        WFISO8601IncludeTime: dateFormat === 'ISO 8601' && timeFormat === 'ISO 8601 Time',
        Type: 'WFDateFormatVariableAggrandizement',
      });
    }

    if (getValueForKey) {
      aggrandizements.push({
        DictionaryKey: getValueForKey,
        Type: 'WFDictionaryValueVariableAggrandizement',
      });
    }

    if (aggrandizements.length > 0) result.Value.Aggrandizements = aggrandizements;
    return result;
  }
}
