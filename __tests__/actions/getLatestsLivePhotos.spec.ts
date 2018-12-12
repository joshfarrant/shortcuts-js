import { getLatestLivePhotos } from '../../src/actions';

describe('getLatestLivePhotos function', () => {

  it('is a function', () => {
    expect(typeof getLatestLivePhotos).toBe('function');
  });

  it('builds a getLatestLivePhotos action when no count is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getlatestlivephotos',
      WFWorkflowActionParameters: {
        WFGetLatestPhotoCount: 1,
      },
    };
    const actual = getLatestLivePhotos({});

    expect(actual).toEqual(expected);
  });

  it('builds a getLatestLivePhotos action with a given count', () => {
    const count = 2;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getlatestlivephotos',
      WFWorkflowActionParameters: {
        WFGetLatestPhotoCount: 2,
      },
    };
    const actual = getLatestLivePhotos({ count });

    expect(actual).toEqual(expected);
  });

});
