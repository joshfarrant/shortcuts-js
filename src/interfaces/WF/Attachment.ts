import Aggrandizement from './Aggrandizement';
import Type from './Type';

interface Attachment {
  Aggrandizements?: Aggrandizement[];
  OutputName?: string;
  OutputUUID?: string;
  Type: Type;
  VariableName?: string;
}

export default Attachment;
