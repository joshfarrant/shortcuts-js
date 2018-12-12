import { getLatestScreenshots } from '../../src/actions';

describe('getLatestScreenshots function', () => {

  it('is a function', () => {
    expect(typeof getLatestScreenshots).toBe('function');
  });

  it('builds a getLatestScreenshots action with a given count', () => {
    const count = 2;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getlastscreenshot',
      WFWorkflowActionParameters: {
        WFGetLatestPhotoCount: 2,
      },
    };
    const actual = getLatestScreenshots({ count });

    expect(actual).toEqual(expected);
  });

});
