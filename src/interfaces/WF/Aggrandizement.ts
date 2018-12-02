import AggrandizementCoercionItemClass from './AggrandizementCoercionItemClass';
import AggrandizementPropertyName from './AggrandizementPropertyName';
import AggrandizementPropertyUserInfo from './AggrandizementPropertyUserInfo';
import AggrandizementType from './AggrandizementType';
import WFDateFormatStyle from './WFDateFormatStyle';

interface Aggrandizement {
  CoercionItemClass?: AggrandizementCoercionItemClass;
  DictionaryKey?: string;
  PropertyName?: AggrandizementPropertyName;
  PropertyUserInfo?: AggrandizementPropertyUserInfo | number;
  Type: AggrandizementType;
  WFDateFormat?: string;
  WFDateFormatStyle?: WFDateFormatStyle;
  WFISO8601IncludeTime?: boolean;
}

export default Aggrandizement;
