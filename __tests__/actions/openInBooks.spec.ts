import { openInBooks } from '../../src/actions';

describe('openInBooks function', () => {

  it('is a function', () => {
    expect(typeof openInBooks).toBe('function');
  });

  it('builds a openInBooks action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.apple.iBooks.openin',
      WFWorkflowActionParameters: {},
    };
    const actual = openInBooks({});

    expect(actual).toEqual(expected);
  });

});
