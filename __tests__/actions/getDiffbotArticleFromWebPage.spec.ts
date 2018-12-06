import { getDiffbotArticleFromWebPage } from '../../src/actions';

describe('getDiffbotArticleFromWebPage function', () => {
  it('is a function', () => {
    expect(typeof getDiffbotArticleFromWebPage).toBe('function');
  });

  it('builds a get article action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getarticle',
      WFWorkflowActionParameters: {},
    };
    const actual = getDiffbotArticleFromWebPage();

    expect(actual).toEqual(expected);
  });
});
