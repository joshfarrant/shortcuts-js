// import * as uuidv4 from 'uuid/v4';
import { FilterTemplate } from '../interfaces/WF/WFContentItemFilter';
import WFContentItemSortOrder from '../interfaces/WF/WFContentItemSortOrder';
import WFContentItemSortProperty from '../interfaces/WF/WFContentItemSortProperty';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';
import { withActionOutput } from '../utils';

type Operator =
  | 'is'
  | 'is not'
  | 'contains'
  | 'does not contains'
  | 'begins with'
  | 'ends with';
type operatorTable = {
  [key in Operator]: number;
};
interface Filter {
  Property: 'Name'; // Currently support Name
  Where: Operator;
  Values?: string;
}
const operatorTable: operatorTable = {
  is: 4,
  'is not': 5,
  contains: 99,
  'does not contains': 999,
  'begins with': 8,
  'ends with': 9,
};
const filterTemplateFactory: (filter: Filter) => FilterTemplate = ({
  Property,
  Where,
  Values,
}) => ({
  Property,
  Operator: operatorTable[Where],
  Values: {
    Unit: 4,
    ...(Values && { String: Values }),
  },
  Removeable: true,
});

const filterFiles = ({
  input,
  limitNumber = 0,
  sortBy,
  sortOrder,
  filters = [],
  matchAll = false,
}: {
  input?: WFSerialization;
  limitNumber?: number;
  sortBy?: WFContentItemSortProperty;
  sortOrder?: WFContentItemSortOrder;
  filters?: Filter[];
  matchAll?: boolean;
}): WFWorkflowAction => {
  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.filter.files',
    WFWorkflowActionParameters: {
      ...(input && { WFContentItemInputParameter: input }),
      ...(sortBy && sortOrder && { WFContentItemSortProperty: sortBy }),
      ...(sortBy && sortOrder && { WFContentItemSortOrder: sortOrder }),
      ...(limitNumber > 0 && { WFContentItemLimitEnabled: true }),
      ...(limitNumber > 0 && { WFContentItemLimitNumber: limitNumber }),
      WFContentItemFilter: {
        Value: {
          WFActionParameterFilterPrefix: matchAll ? 1 : 0,
          WFContentPredicateBoundedDate: false,
          WFActionParameterFilterTemplates: filters.map(filterTemplateFactory),
        },
        WFSerializationType: 'WFContentPredicateTableTemplate',
      },
    },
  };
};

export default withActionOutput(filterFiles);
