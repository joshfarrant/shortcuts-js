import { getVariable } from '../../src/actions';
import {
  actionOutput,
  variable,
} from '../../src/utils';

describe('getVariable function', () => {

  it('is a function', () => {
    expect(typeof getVariable).toBe('function');
  });

  it('builds a getVariable action when a variable is passed', () => {
    const namedVar = variable('variable');

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
      WFWorkflowActionParameters: {
        WFVariable: {
          Value: {
            Type: 'Variable',
            VariableName: namedVar.Value.VariableName,
          },
          WFSerializationType: 'WFTextTokenAttachment',
        },
      },
    };

    const actual = getVariable({ variable: namedVar });

    expect(actual).toEqual(expected);
  });

  it('builds a getVariable action when a magic variable is passed', () => {
    const magic = actionOutput();

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
      WFWorkflowActionParameters: {
        WFVariable: {
          Value: {
            OutputUUID: magic.Value.OutputUUID,
            Type: 'ActionOutput',
          },
          WFSerializationType: 'WFTextTokenAttachment',
        },
      },
    };

    const actual = getVariable({ variable: magic });

    expect(actual).toEqual(expected);
  });

});
