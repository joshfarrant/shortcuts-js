import {
  actionOutput,
  withActionOutput,
} from '../../src/utils';

import { number } from '../../src/actions';

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
        UUID: magicVariable.OutputUUID,
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
        UUID: magicVariable.OutputUUID,
        CustomOutputName: magicVariable.OutputName,
      },
    };

    expect(actual).toEqual(expected);
  });

});
