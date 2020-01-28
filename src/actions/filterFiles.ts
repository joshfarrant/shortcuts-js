// import * as uuidv4 from 'uuid/v4';
import { FilterTemplate } from '../interfaces/WF/WFContentItemFilter';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';
import { withActionOutput } from '../utils';

// Currently implement `Name` property
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
const filterFactory: (filter: Filter) => FilterTemplate = ({
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
  limitEnabled = false,
  limitNumber = 1,
  sortBy,
  sortOrder,
  filters = [],
  matchAll = false,
}: {
  input?: WFSerialization;
  sortBy?:
    | 'Random'
    | 'Name'
    | 'File Size'
    | 'File Extension'
    | 'Creation Date'
    | 'Last Modified Date';
  sortOrder?: 'A to Z' | 'Z to A' | 'Oldest First' | 'Latest First';
  limitEnabled?: boolean;
  limitNumber?: number;
  filters?: Filter[];
  matchAll?: boolean;
}): WFWorkflowAction => {
  const filterTemplates = filters.map(filterFactory);
  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.filter.files',
    WFWorkflowActionParameters: {
      ...(input && { WFContentItemInputParameter: input }),
      ...(sortBy && sortOrder && { WFContentItemSortProperty: sortBy }),
      ...(sortBy && sortOrder && { WFContentItemSortOrder: sortOrder }),
      ...(limitEnabled && { WFContentItemLimitEnabled: limitEnabled }),
      ...(limitEnabled && { WFContentItemLimitNumber: limitNumber }),
      WFContentItemFilter: {
        Value: {
          WFActionParameterFilterPrefix: matchAll ? 1 : 0,
          WFContentPredicateBoundedDate: false,
          WFActionParameterFilterTemplates: filterTemplates,
        },
        WFSerializationType: 'WFContentPredicateTableTemplate',
      },
    },
  };
};

export default withActionOutput(filterFiles);
