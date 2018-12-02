import { base64Encode } from '../../src/actions';

describe('base64Encode function', () => {

  it('is a function', () => {
    expect(typeof base64Encode).toBe('function');
  });

  it('builds a base64Encode action (encode with no line break)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.base64encode',
      WFWorkflowActionParameters: {
        WFEncodeMode: 'Encode',
        WFBase64LineBreakMode: 'None',
      },
    };
    const actual = base64Encode({
      encodeMode: 'Encode',
      lineBreakMode: 'None',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a base64Encode action (encode with 64-char line break)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.base64encode',
      WFWorkflowActionParameters: {
        WFEncodeMode: 'Encode',
        WFBase64LineBreakMode: 'Every 64 Characters',
      },
    };
    const actual = base64Encode({
      encodeMode: 'Encode',
      lineBreakMode: 'Every 64 Characters',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a base64Encode action (encode with 76-char line break)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.base64encode',
      WFWorkflowActionParameters: {
        WFEncodeMode: 'Encode',
        WFBase64LineBreakMode: 'Every 76 Characters',
      },
    };
    const actual = base64Encode({
      encodeMode: 'Encode',
      lineBreakMode: 'Every 76 Characters',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a base64Encode action (decode)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.base64encode',
      WFWorkflowActionParameters: {
        WFEncodeMode: 'Decode',
        WFBase64LineBreakMode: 'Every 76 Characters',
      },
    };
    const actual = base64Encode({
      encodeMode: 'Decode',
    });

    expect(actual).toEqual(expected);
  });

});
