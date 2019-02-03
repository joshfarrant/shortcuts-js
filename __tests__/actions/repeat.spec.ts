import { comment, repeat, showAlert } from '../../src/actions';
import WFWorkflowAction from '../../src/interfaces/WF/WFWorkflowAction';

import {
  compareObjectsWithGroupingIdentifier,
} from '../_helpers/compareObjectsWithGroupingIdentifier';

describe('repeat function', () => {

  it('is a function', () => {
    expect(typeof repeat).toBe('function');
  });

  it('builds a repeat action when no options are passed', () => {
    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.count',
        WFWorkflowActionParameters: {
          WFRepeatCount: 1,
          WFControlFlowMode: 0,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.count',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];
    const actual = repeat({});

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a repeat action when all options are passed', () => {
    const count = 12;
    const actions = [
      comment({
        text: 'Hello World 2',
      }),
      showAlert({}),
    ]; // Uses 2 of the supported actions for testing.

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.count',
        WFWorkflowActionParameters: {
          WFRepeatCount: 12,
          WFControlFlowMode: 0,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.comment',
        WFWorkflowActionParameters: {
          WFCommentActionText: 'Hello World 2',
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.alert',
        WFWorkflowActionParameters: {
          WFAlertActionTitle: 'Alert',
          WFAlertActionMessage: 'Do you want to continue?',
          WFAlertActionCancelButtonShown: true,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.count',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];
    const actual = repeat({
      actions,
      count,
    });

    compareObjectsWithGroupingIdentifier(actual, expected);
  });
});
