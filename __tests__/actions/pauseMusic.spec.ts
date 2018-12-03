import { pauseMusic } from '../../src/actions';

describe('pauseMusic function', () => {
  it('is a function', () => {
    expect(typeof pauseMusic).toBe('function');
  });

  it('builds a pause music action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.pausemusic',
      WFWorkflowActionParameters: {},
    };
    const actual = pauseMusic();

    expect(actual).toEqual(expected);
  });
});
