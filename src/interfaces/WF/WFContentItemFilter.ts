import WFSerializationType from '../WF/WFSerializationType';
export interface FilterTemplate {
  Operator: number;
  Values: {
    Unit: number;
    String?: string;
  };
  Removeable: boolean;
  Property: 'Name';
}

interface WFContentItemFilter {
  Value: {
    WFActionParameterFilterPrefix: number;
    WFContentPredicateBoundedDate: boolean;
    WFActionParameterFilterTemplates: FilterTemplate[];
  };
  WFSerializationType: WFSerializationType;
}
export default WFContentItemFilter;
