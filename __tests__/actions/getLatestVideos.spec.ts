import { getLatestVideos } from '../../src/actions';

describe('getLatestVideos function', () => {

  it('is a function', () => {
    expect(typeof getLatestVideos).toBe('function');
  });

  it('builds a getLatestVideos action when no count is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getlastvideo',
      WFWorkflowActionParameters: {
        WFGetLatestPhotoCount: 1,
      },
    };
    const actual = getLatestVideos({});

    expect(actual).toEqual(expected);
  });

  it('builds a getLatestVideos action with a given count', () => {
    const count = 2;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getlastvideo',
      WFWorkflowActionParameters: {
        WFGetLatestPhotoCount: 2,
      },
    };
    const actual = getLatestVideos({ count });

    expect(actual).toEqual(expected);
  });

});
