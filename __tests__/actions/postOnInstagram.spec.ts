import { postOnInstagram } from '../../src/actions';

describe('postOnInstagram function', () => {

  it('is a function', () => {
    expect(typeof postOnInstagram).toBe('function');
  });

  it('builds a postOnInstagram action when no caption is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.burbn.instagram.openin',
      WFWorkflowActionParameters: {
        InstagramCaption: '',
      },
    };
    const actual = postOnInstagram({});

    expect(actual).toEqual(expected);
  });

  it('builds a postOnInstagram action with given caption', () => {
    const caption = 'Hello, world!';
    const expected = {
      WFWorkflowActionIdentifier: 'com.burbn.instagram.openin',
      WFWorkflowActionParameters: {
        InstagramCaption: caption,
      },
    };
    const actual = postOnInstagram({ caption });

    expect(actual).toEqual(expected);
  });

});
