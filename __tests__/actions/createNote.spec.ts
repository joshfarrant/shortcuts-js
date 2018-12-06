import { createNote } from '../../src/actions';

describe('createNote function', () => {

  it('is a function', () => {
    expect(typeof createNote).toBe('function');
  });

  it('builds a createNote action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.apple.mobilenotes.SharingExtension',
      WFWorkflowActionParameters: {},
    };
    const actual = createNote({});

    expect(actual).toEqual(expected);
  });

});
