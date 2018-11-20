import Type from './Type';

interface Attachment {
  OutputName?: string;
  OutputUUID?: string;
  Type: Type;
  VariableName?: string;
}

export default Attachment;
