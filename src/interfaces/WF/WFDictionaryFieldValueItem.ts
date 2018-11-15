import WFItemType from './WFItemType';
import WFSerialization from './WFSerialization';

interface WFDictionaryFieldValueItem {
  WFKey?: WFSerialization;
  WFItemType: WFItemType;
  WFValue: WFSerialization;
}

export default WFDictionaryFieldValueItem;
