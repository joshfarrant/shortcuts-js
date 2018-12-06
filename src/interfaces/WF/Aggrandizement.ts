import AggrandizementCoercionItemClass from './AggrandizementCoercionItemClass';
import AggrandizementPropertyName from './AggrandizementPropertyName';
import AggrandizementPropertyUserInfo from './AggrandizementPropertyUserInfo';
import AggrandizementType from './AggrandizementType';
import WFDateFormatStyle from './WFDateFormatStyle';
import WFRelativeDateFormatStyle from './WFRelativeDateFormatStyle';

interface Aggrandizement {
  CoercionItemClass?: AggrandizementCoercionItemClass;
  DictionaryKey?: string;
  PropertyName?: AggrandizementPropertyName;
  PropertyUserInfo?: AggrandizementPropertyUserInfo | number;
  Type: AggrandizementType;
  WFDateFormat?: string;
  WFDateFormatStyle?: WFDateFormatStyle;
  WFISO8601IncludeTime?: boolean;
  WFRelativeDateFormatStyle?: WFRelativeDateFormatStyle;
}

export default Aggrandizement;
