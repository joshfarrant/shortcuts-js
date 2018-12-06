import { postOnInstagram } from '../../src/actions';

describe('postOnInstagram function', () => {

  it('is a function', () => {
    expect(typeof postOnInstagram).toBe('function');
  });

  it('builds a postOnInstagram action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.burbn.instagram.openin',
      WFWorkflowActionParameters: {},
    };
    const actual = postOnInstagram({});

    expect(actual).toEqual(expected);
  });

});
