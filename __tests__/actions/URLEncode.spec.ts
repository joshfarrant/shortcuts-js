import { URLEncode } from '../../src/actions';

describe('URLEncode function', () => {

  it('is a function', () => {
    expect(typeof URLEncode).toBe('function');
  });

  it('builds a URLEncode action (encode)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.urlencode',
      WFWorkflowActionParameters: {
        WFEncodeMode: 'Encode',
      },
    };
    const actual = URLEncode({});

    expect(actual).toEqual(expected);
  });

  it('builds a URLEncode action (decode)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.urlencode',
      WFWorkflowActionParameters: {
        WFEncodeMode: 'Decode',
      },
    };
    const actual = URLEncode({
      encodeMode: 'Decode',
    });

    expect(actual).toEqual(expected);
  });

});
