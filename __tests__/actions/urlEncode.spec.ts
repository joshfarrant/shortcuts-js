import { urlEncode } from '../../src/actions';

describe('urlEncode function', () => {

  it('is a function', () => {
    expect(typeof urlEncode).toBe('function');
  });

  it('builds a urlEncode action (encode)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.urlencode',
      WFWorkflowActionParameters: {
        WFEncodeMode: 'Encode',
      },
    };
    const actual = urlEncode({});

    expect(actual).toEqual(expected);
  });

  it('builds a urlEncode action (decode)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.urlencode',
      WFWorkflowActionParameters: {
        WFEncodeMode: 'Decode',
      },
    };
    const actual = urlEncode({
      encodeMode: 'Decode',
    });

    expect(actual).toEqual(expected);
  });

});
