import { openURLsInChrome } from '../../src/actions';

describe('openURLsInChrome function', () => {
  it('is a function', () => {
    expect(typeof openURLsInChrome).toBe('function');
  });

  it('builds a openURLsInChrome action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.google.chrome.ios.openurl',
      WFWorkflowActionParameters: {},
    };
    const actual = openURLsInChrome({});

    expect(actual).toEqual(expected);
  });
});
