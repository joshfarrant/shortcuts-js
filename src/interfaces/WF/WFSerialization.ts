import Attachment from './Attachment';
import Type from './Type';
import WFDictionaryFieldValueItem from './WFDictionaryFieldValueItem';
import WFSerializationType from './WFSerializationType';

interface SerializationValue {
  Type?: Type;
  string?: string;
  attachmentsByRange?: {
    [key: string]: Attachment;
  };
  Value?: WFSerialization | boolean;
  WFDictionaryFieldValueItems?: WFDictionaryFieldValueItem[];
}

interface WFSerialization {
  Value: (
    SerializationValue
    | WFSerialization
    | WFDictionaryFieldValueItem[]
    | string
    | number
    | boolean
  );
  WFSerializationType: WFSerializationType;
}

export default WFSerialization;
