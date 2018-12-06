import { getCurrentSong } from '../../src/actions';

describe('getCurrentSong function', () => {
  it('is a function', () => {
    expect(typeof getCurrentSong).toBe('function');
  });

  it('builds a get current song action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getcurrentsong',
      WFWorkflowActionParameters: {},
    };
    const actual = getCurrentSong();

    expect(actual).toEqual(expected);
  });
});
