import { facetime } from '../../src/actions';

describe('facetime function', () => {
  it('is a function', () => {
    expect(typeof facetime).toBe('function');
  });

  it('builds a facetime action with default type', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.apple.facetime.facetime',
      WFWorkflowActionParameters: {
        WFFaceTimeType: {
          Value: {
            Type: 'Video',
          },
          WFSerializationType: 'WFTextTokenAttachment',
        },
      },
    };
    const actual = facetime({});

    expect(actual).toEqual(expected);
  });

  it('builds a facetime action with a specified type', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.apple.facetime.facetime',
      WFWorkflowActionParameters: {
        WFFaceTimeType: {
          Value: {
            Type: 'Ask',
          },
          WFSerializationType: 'WFTextTokenAttachment',
        },
      },
    };
    const actual = facetime({ type: 'Ask' });

    expect(actual).toEqual(expected);
  });
});
