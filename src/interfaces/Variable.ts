import Aggrandizement from './WF/Aggrandizement';
import AggrandizementCoercionItemClass from './WF/AggrandizementCoercionItemClass';
import AggrandizementPropertyName from './WF/AggrandizementPropertyName';
import AggrandizementPropertyUserInfo from './WF/AggrandizementPropertyUserInfo';
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
  ['Text',  'WFStringContentItem'],
  ['URL', 'WFURLContentItem'],
  ['vCard', 'WFVCardContentItem'],
]);

/** @ignore */
const propertiesMap = new Map<string, AggrandizementPropertyName>([
  ['Album Track No.', 'Album Track #'],
  ['County', 'State'],
  ['Disc No.', 'Disc #'],
  ['Is Favourite', 'Is Favorite'],
  ['No. of Ratings (This Version)', '# of Ratings (This Version)'],
  ['No. of Ratings', '# of Ratings'],
  ['Postcode', 'ZIP Code'],
  ['Town/City', 'City'],
]);

/** @ignore */
const propertyUserInfosMap = new Map<AggrandizementPropertyName, AggrandizementPropertyUserInfo>([
  ['Album Artist', 'albumArtist'],
  ['Album Artwork', 'artwork'],
  ['Album Track #', 'albumTrackNumber'],
  ['Album', 'albumName'], // as Media
  ['Album', 'albumTitle'], // as iTunes media
  ['Artist', 'artist'],
  ['Birthday', 17],
  ['City', 'city'],
  ['Comments', 'comments'],
  ['Company', 10],
  ['Composer', 'composer'],
  ['Contact Photo', '18446744073709550616'],
  ['Country', 'country'],
  ['Creation Date', 'WFFileCreationDate'],
  ['Date Added', 'dateAdded'],
  ['Department', 11],
  ['Disc #', 'discNumber'],
  ['Duration', 'playbackDuration'],
  ['Email Address', 4],
  ['File Extension', 'WFFileExtensionProperty'],
  ['File Size', 'WFFileSizeProperty'],
  ['First Name', 0],
  ['Genre', 'genre'],
  ['Group', 'WFContactItemGroupProperty'],
  ['Has Photo', '18446744073709550615'],
  ['Is Cloud Item', 'isCloudItem'],
  ['Is Explicit', 'isExplicit'],
  ['Job Title', 18],
  ['Last Modified Date', 'WFFileModificationDate'],
  ['Last Name', 1],
  ['Last Played Date', 'lastPlayedDate'],
  ['Lyrics', 'lyrics'],
  ['Media Kind', 'mediaType'],
  ['Middle Name', 6],
  ['Name', 'WFItemName'],
  ['Nickname', 19],
  ['Notes', 14],
  ['Phone Number', 3],
  ['Phonetic First Name', 7],
  ['Phonetic Last Name', 9],
  ['Phonetic Middle Name', 8],
  ['Play Count', 'playCount'],
  ['Prefix', 20],
  ['Rating', 'rating'],
  ['Release Date', 'releaseDate'],
  ['Skip Count', 'skipCount'],
  ['State', 'state'],
  ['Street Address', 5],
  ['Street', 'street'],
  ['Suffix', 21],
  ['Title', 'title'],
  ['URL', 22],
  ['ZIP Code', 'postalCode'],
]);

export default class Variable implements WFSerialization {
  Value: Attachment;
  WFSerializationType: WFSerializationType;

  constructor(value: Attachment) {
    this.Value = value;
    this.WFSerializationType = 'WFTextTokenAttachment';
  }

  /**
   * Method that can be applied to variables, magic variables, global variables and local variables.
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
      get,
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

    if (get) {
      const property = propertiesMap.get(get) || get;
      // Album property name has different userInfo in iTunes media and Media types
      let userInfo = property && propertyUserInfosMap.get(property);
      if (type === 'Media' && property === 'Album') userInfo = 'albumName';

      aggrandizements.push({
        PropertyName: property,
        ...(userInfo && { PropertyUserInfo: userInfo }),
        Type: 'WFPropertyVariableAggrandizement',
      });
    }

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
