import AggrandizementCoercionItemClass from './AggrandizementCoercionItemClass';
import AggrandizementPropertyName from './AggrandizementPropertyName';
import AggrandizementPropertyUserInfo from './AggrandizementPropertyUserInfo';
import AggrandizementType from './AggrandizementType';
import WFDateFormatStyle from './WFDateFormatStyle';
import WFRelativeDateFormatStyle from './WFRelativeDateFormatStyle';
import WFTimeFormatStyle from './WFTimeFormatStyle';

interface Aggrandizement {
  CoercionItemClass?: AggrandizementCoercionItemClass;
  DictionaryKey?: string;
  PropertyName?: AggrandizementPropertyName;
  PropertyUserInfo?: AggrandizementPropertyUserInfo;
  Type: AggrandizementType;
  WFDateFormat?: string;
  WFDateFormatStyle?: WFDateFormatStyle;
  WFTimeFormatStyle?: WFTimeFormatStyle;
  WFISO8601IncludeTime?: boolean;
  WFRelativeDateFormatStyle?: WFRelativeDateFormatStyle;
}

export default Aggrandizement;
