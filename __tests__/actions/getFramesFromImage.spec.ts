import { getFramesFromImage } from '../../src/actions';

describe('getFramesFromImage function', () => {
  it('is a function', () => {
    expect(typeof getFramesFromImage).toBe('function');
  });

  it('builds a get frames from image action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getframesfromimage',
      WFWorkflowActionParameters: {},
    };
    const actual = getFramesFromImage();

    expect(actual).toEqual(expected);
  });
});
