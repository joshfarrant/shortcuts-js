import { text } from '../../src/actions';

import WFSerialization from '../../src/interfaces/WF/WFSerialization';

describe('text function', () => {

  it('is a function', () => {
    expect(typeof text).toBe('function');
  });

  it('builds a text action when no text is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettext',
      WFWorkflowActionParameters: {
        WFTextActionText: '',
      },
    };
    const actual = text({});

    expect(actual).toEqual(expected);
  });

  it('builds a text action when a string of text is passed', () => {
    const testText = 'Hello, world!';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettext',
      WFWorkflowActionParameters: {
        WFTextActionText: testText,
      },
    };
    const actual = text({ text: testText });

    expect(actual).toEqual(expected);
  });

  it('builds a text action when a variable object is passed', () => {
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
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettext',
      WFWorkflowActionParameters: {
        WFTextActionText: {
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

    const actual = text({ text: variableObject });

    expect(actual).toEqual(expected);
  });

});
