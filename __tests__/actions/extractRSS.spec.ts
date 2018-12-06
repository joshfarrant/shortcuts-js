import { extractRSS } from '../../src/actions';

describe('extractRSS function', () => {
  it('is a function', () => {
    expect(typeof extractRSS).toBe('function');
  });

  it('builds a extract rss feeds from page action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.rss.extract',
      WFWorkflowActionParameters: {},
    };
    const actual = extractRSS();

    expect(actual).toEqual(expected);
  });
});
