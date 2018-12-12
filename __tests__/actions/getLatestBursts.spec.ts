import { getLatestBursts } from '../../src/actions';

describe('getLatestBursts function', () => {

  it('is a function', () => {
    expect(typeof getLatestBursts).toBe('function');
  });

  it('builds a getLatestBursts action when no count is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getlatestbursts',
      WFWorkflowActionParameters: {
        WFGetLatestPhotoCount: 1,
      },
    };
    const actual = getLatestBursts({});

    expect(actual).toEqual(expected);
  });

  it('builds a getLatestBursts action with a given count', () => {
    const count = 2;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getlatestbursts',
      WFWorkflowActionParameters: {
        WFGetLatestPhotoCount: 2,
      },
    };
    const actual = getLatestBursts({ count });

    expect(actual).toEqual(expected);
  });

});
