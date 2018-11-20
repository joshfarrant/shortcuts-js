import Attachment from './Attachment';
import Type from './Type';
import WFDictionaryFieldValueItem from './WFDictionaryFieldValueItem';
import WFSerializationType from './WFSerializationType';

interface SerializationValue {
  attachmentsByRange?: {
    [key: string]: Attachment;
  };
  OutputUUID?: string;
  OutputName?: string;
  string?: string;
  Type?: Type;
  Value?: WFSerialization | boolean;
  VariableName?: string;
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
