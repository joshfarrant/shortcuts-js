import { runHomeScene } from '../../src/actions';
import { askWhenRun } from '../../src/variables';

describe('runHomeScene function', () => {
  it('is a function', () => {
    expect(typeof runHomeScene).toBe('function');
  });

  it('builds a runHomeScene action with specified arguments', () => {
    const homeName = 'My test home';
    const sceneName = 'My great test scene';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.runscene',
      WFWorkflowActionParameters: {
        WFHomeName: homeName,
        WFHomeSceneName: sceneName,
      },
    };
    const actual = runHomeScene({ homeName, sceneName });

    expect(actual).toEqual(expected);
  });

  it('builds a runHomeScene action with user choice on run', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.runscene',
      WFWorkflowActionParameters: {
        WFHomeName: {
          Value: {
            Type: 'Ask',
          },
          WFSerializationType: 'WFTextTokenAttachment',
        },
        WFHomeSceneName: {
          Value: {
            Type: 'Ask',
          },
          WFSerializationType: 'WFTextTokenAttachment',
        },
      },
    };
    const actual = runHomeScene({ homeName: askWhenRun, sceneName: askWhenRun });

    expect(actual).toEqual(expected);
  });
});
