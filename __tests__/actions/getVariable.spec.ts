import { getVariable } from '../../src/actions';
import {
  actionOutput,
  variable,
} from '../../src/utils/variables';

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
          Value: namedVar,
          WFSerializationType: 'WFTextTokenAttachment',
        },
      },
    };

    const actual = getVariable({ variable: namedVar });

    expect(actual).toEqual(expected);
  });

  it('builds a getVariable action when a magic variable is passed', () => {
    const magic = actionOutput();
    magic.OutputUUID = 'b74c81a8-192a-463f-a0a6-2d327963714f';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
      WFWorkflowActionParameters: {
        WFVariable: {
          Value: {
            OutputUUID: magic.OutputUUID,
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
