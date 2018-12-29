import { comment, number, repeat, showAlert } from '../../src/actions';
import WFWorkflowAction from '../../src/interfaces/WF/WFWorkflowAction';
import {
  actionOutput,
  withActionOutput,
} from '../../src/utils';

const compareObjectsWithGroupingIdentifier = (
  actual: WFWorkflowAction[],
  expected: WFWorkflowAction[],
) => {
  expect.assertions(expected.length);

  expected.forEach((obj, idx) => {
    const actualObj = actual[idx];
    const expectedObj = {
      ...obj,
    };

    const { GroupingIdentifier } = actualObj.WFWorkflowActionParameters;
    if (GroupingIdentifier) {
      expectedObj.WFWorkflowActionParameters.GroupingIdentifier = GroupingIdentifier;
    }

    expect(actual[idx]).toEqual(expectedObj);
  });
};

describe('withActionOutput function', () => {

  it('is a function', () => {
    expect(typeof withActionOutput).toBe('function');
  });

  it('returns a function', () => {
    expect(typeof withActionOutput(number)).toBe('function');
  });

  it('adds an action output to the generated action', () => {
    const magicVariable = actionOutput();
    const actual = withActionOutput(number)({ number: 42 }, magicVariable);

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.number',
      WFWorkflowActionParameters: {
        WFNumberActionNumber: 42,
        UUID: magicVariable.Value.OutputUUID,
      },
    };

    expect(actual).toEqual(expected);
  });

  it('adds a custom named action output to the generated action', () => {
    const magicVariable = actionOutput('My Number');
    const actual = withActionOutput(number)({ number: 42 }, magicVariable);

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.number',
      WFWorkflowActionParameters: {
        WFNumberActionNumber: 42,
        UUID: magicVariable.Value.OutputUUID,
        CustomOutputName: magicVariable.Value.OutputName,
      },
    };

    expect(actual).toEqual(expected);
  });

  it('adds a custom named action output to an action that generates a list', () => {
    const magicVariable = actionOutput('Repeat Action Output');

    const actions = [
      comment({
        text: 'Hello World 2',
      }),
      showAlert({}),
    ];
    const actual = withActionOutput(repeat)({ actions, count: 10 }, magicVariable);

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.count',
        WFWorkflowActionParameters: {
          WFRepeatCount: 10,
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
          UUID: magicVariable.Value.OutputUUID,
          CustomOutputName: magicVariable.Value.OutputName,
        },
      },
    ];
    compareObjectsWithGroupingIdentifier(<WFWorkflowAction[]>actual, expected);
  });

  it('adds an action output to an action that generates a list', () => {
    const magicVariable = actionOutput();

    const actions = [
      comment({
        text: 'Hello World 2',
      }),
      showAlert({}),
    ];
    const actual = withActionOutput(repeat)({ actions, count: 10 }, magicVariable);

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.repeat.count',
        WFWorkflowActionParameters: {
          WFRepeatCount: 10,
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
          UUID: magicVariable.Value.OutputUUID,
        },
      },
    ];
    compareObjectsWithGroupingIdentifier(<WFWorkflowAction[]>actual, expected);
  });

});
