import { setTorch } from '../../src/actions';

describe('setTorch function', () => {

  it('is a function', () => {
    expect(typeof setTorch).toBe('function');
  });

  it('builds a setTorch action when no setting is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.flashlight',
      WFWorkflowActionParameters: {
        WFFlashlightSetting: 'On',
      },
    };
    const actual = setTorch({});

    expect(actual).toEqual(expected);
  });

  it('builds a setTorch action when setting is passed', () => {
    const setting = 'Toggle';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.flashlight',
      WFWorkflowActionParameters: {
        WFFlashlightSetting: setting,
      },
    };
    const actual = setTorch({ setting });

    expect(actual).toEqual(expected);
  });

});
