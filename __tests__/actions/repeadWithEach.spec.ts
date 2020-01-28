import { actionOutput } from '../../src';
import { list, repeatWithEach, showResult } from '../../src/actions';
import WFWorkflowAction from '../../src/interfaces/WF/WFWorkflowAction';

import { compareObjectsWithGroupingIdentifier } from '../_helpers/compareObjectsWithGroupingIdentifier';

describe('repeatWithEach function', () => {
  it('is a function', () => {
    expect(typeof repeatWithEach).toBe('function');
  });

  it('builds a repeat action when no options are passed', () => {
    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.each',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 0,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.each',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];
    const actual = repeatWithEach({});

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a repeat action when all options are passed', () => {
    const reference = actionOutput();
    list(
      {
        value: ['item1', 'item2'],
      },
      reference,
    );

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.each',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 0,
          WFInput: reference,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.showresult',
        WFWorkflowActionParameters: {
          Text: '',
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.each',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];
    const actual = repeatWithEach({
      items: reference,
      actions: [showResult({})],
    });

    compareObjectsWithGroupingIdentifier(actual, expected);
  });
});
