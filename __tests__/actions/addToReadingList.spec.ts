import { addToReadingList } from '../../src/actions';

describe('addToReadingList function', () => {
  it('is a function', () => {
    expect(typeof addToReadingList).toBe('function');
  });

  it('builds a add to reading list action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.readinglist',
      WFWorkflowActionParameters: {},
    };
    const actual = addToReadingList();

    expect(actual).toEqual(expected);
  });
});
