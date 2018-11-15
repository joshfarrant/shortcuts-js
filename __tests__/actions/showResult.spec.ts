import { showResult } from '../../src/actions';

import WFSerialization from '../../src/interfaces/WF/WFSerialization';

describe('showResult function', () => {

  it('is a function', () => {
    expect(typeof showResult).toBe('function');
  });

  it('builds a showResult action when no text is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.showresult',
      WFWorkflowActionParameters: {
        Text: '',
      },
    };
    const actual = showResult({});

    expect(actual).toEqual(expected);
  });

  it('builds a showResult action when a string of text is passed', () => {
    const text = 'Hello, world!';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.showresult',
      WFWorkflowActionParameters: {
        Text: text,
      },
    };
    const actual = showResult({ text });

    expect(actual).toEqual(expected);
  });

  it('builds a showResult action when a variable object is passed', () => {
    const uuid = 'b74c81a8-192a-463f-a0a6-2d327963714f';

    const variableObject: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: '￼', // Object replacement character
        attachmentsByRange: {
          '{0, 1}': {
            OutputUUID: uuid,
            Type: 'ActionOutput',
          },
        },
      },
    };

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.showresult',
      WFWorkflowActionParameters: {
        Text: {
          WFSerializationType: 'WFTextTokenString',
          Value: {
            string: '￼', // Object replacement character
            attachmentsByRange: {
              '{0, 1}': {
                OutputUUID: uuid,
                Type: 'ActionOutput',
              },
            },
          },
        },
      },
    };

    const actual = showResult({ text: variableObject });

    expect(actual).toEqual(expected);
  });

});
