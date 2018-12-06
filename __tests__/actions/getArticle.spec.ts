import { getArticle } from '../../src/actions';

describe('getArticle function', () => {
  it('is a function', () => {
    expect(typeof getArticle).toBe('function');
  });

  it('builds a get article action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getarticle',
      WFWorkflowActionParameters: {},
    };
    const actual = getArticle();

    expect(actual).toEqual(expected);
  });
});
