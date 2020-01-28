import { filterFiles } from '../../src/actions';

describe('filterFiles function', () => {
  it('is a function', () => {
    expect(typeof filterFiles).toBe('function');
  });

  it('builds a filterFiles action with default type', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.filter.files',
      WFWorkflowActionParameters: {
      },
    };
    const actual = filterFiles({});

    expect(actual).toEqual(expected);
  });

  it('builds a filterFiles action with a specified type', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.filter.files',
      WFWorkflowActionParameters: {
        WFContentItemSortProperty: 'Creation Date',
        WFContentItemSortOrder: 'Latest First',
        WFContentItemLimitEnabled: true,
        WFContentItemLimitNumber: 2,
        WFContentItemFilter: {
          Value: {
            WFActionParameterFilterPrefix: 1,
            WFContentPredicateBoundedDate: false,
            WFActionParameterFilterTemplates: [
              {
                Property: 'Name',
                Operator: 4,
                Values: {
                  Unit: 4,
                  String: '123',
                },
                Removeable: true,
              },
              {
                Property: 'Name',
                Operator: 99,
                Values: {
                  Unit: 4,
                  String: 'bbb',
                },
                Removeable: true,
              },
            ],
          },
          WFSerializationType: 'WFContentPredicateTableTemplate',
        },
      },
    };
    const actual = filterFiles({
      limitNumber: 2,
      sortBy: 'Creation Date',
      sortOrder: 'Latest First',
      filters: [
        { Property: 'Name', Where: 'is', Values: '123' },
        { Property: 'Name', Where: 'contains', Values: 'bbb' },
      ],
      matchAll: true,
    });

    expect(actual).toEqual(expected);
  });
});
