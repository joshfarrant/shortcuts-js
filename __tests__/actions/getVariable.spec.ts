import { getVariable } from '../../src/actions';

import WFSerialization from '../../src/interfaces/WF/WFSerialization';

describe('getVariable function', () => {

  it('is a function', () => {
    expect(typeof getVariable).toBe('function');
  });

  it('builds a getVariable action when no variable is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
      WFWorkflowActionParameters: {},
    };
    const actual = getVariable({});

    expect(actual).toEqual(expected);
  });

  it('builds a getVariable action when a variable name is passed', () => {
    const name = 'variable';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
      WFWorkflowActionParameters: {
        WFVariable: {
          Value: {
            Type: 'Variable',
            VariableName: name,
          },
          WFSerializationType: 'WFTextTokenAttachment',
        },
      },
    };

    const actual = getVariable({ variable: name });

    expect(actual).toEqual(expected);
  });

  it('builds a getVariable action when a variable UUID is passed', () => {
    const uuid = 'b74c81a8-192a-463f-a0a6-2d327963714f';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
      WFWorkflowActionParameters: {
        WFVariable: {
          Value: {
            OutputUUID: uuid,
            Type: 'ActionOutput',
          },
          WFSerializationType: 'WFTextTokenAttachment',
        },
      },
    };

    const actual = getVariable({ variable: uuid });

    expect(actual).toEqual(expected);
  });

  it('builds a getVariable action when a variable object is passed', () => {
    const uuid = 'b74c81a8-192a-463f-a0a6-2d327963714f';

    const variableObject: WFSerialization = {
      Value: {
        OutputUUID: uuid,
        Type: 'ActionOutput',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
      WFWorkflowActionParameters: {
        WFVariable: {
          Value: {
            OutputUUID: uuid,
            Type: 'ActionOutput',
          },
          WFSerializationType: 'WFTextTokenAttachment',
        },
      },
    };

    const actual = getVariable({ variable: variableObject });

    expect(actual).toEqual(expected);
  });
});
