import { setVolume } from '../../src/actions';

describe('setVolume function', () => {
  it('is a function', () => {
    expect(typeof setVolume).toBe('function');
  });

  it('builds a setVolume action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setvolume',
      WFWorkflowActionParameters: {
        WFVolume: 0.5,
      },
    };

    const actual = setVolume({});

    expect(actual).toEqual(expected);
  });

  it('builds a setVolume action when a volume options is specified', () => {
    const volumeLevel = 0.3;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setvolume',
      WFWorkflowActionParameters: {
        WFVolume: volumeLevel,
      },
    };

    const actual = setVolume({
      volume: volumeLevel,
    });

    expect(actual).toEqual(expected);
  });
});
