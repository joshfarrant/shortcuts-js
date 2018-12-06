import { getHeadersOfURL } from '../../src/actions';

describe('getHeadersOfURL function', () => {
  it('is a function', () => {
    expect(typeof getHeadersOfURL).toBe('function');
  });

  it('builds a get headers of url action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.url.getheaders',
      WFWorkflowActionParameters: {},
    };
    const actual = getHeadersOfURL({});

    expect(actual).toEqual(expected);
  });
});
