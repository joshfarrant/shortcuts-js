import { ask } from '../../src/actions';
import WFSerialization from '../../src/interfaces/WF/WFSerialization';
import WFSerializationType from '../../src/interfaces/WF/WFSerializationType';

describe('ask function', () => {

  it('is a function', () => {
    expect(typeof ask).toBe('function');
  });

  it('builds a ask action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.ask',
      WFWorkflowActionParameters: {
        WFInputType: 'Text',
        WFAskActionDefaultAnswer: '',
        WFAskActionPrompt: '',
      },
    };
    const actual = ask({});

    expect(actual).toEqual(expected);
  });

  it('builds a ask action when all options are passed as strings', () => {
    const inputType = 'Number';
    const defaultAnswer = 'My answer';
    const question = 'My question';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.ask',
      WFWorkflowActionParameters: {
        WFInputType: inputType,
        WFAskActionDefaultAnswer: defaultAnswer,
        WFAskActionPrompt: question,
      },
    };
    const actual = ask({
      inputType,
      defaultAnswer,
      question,
    });

    expect(actual).toEqual(expected);
  });

  it('builds a ask action when defaultAnswer and question are passed as variable objects', () => {
    const uuid = 'b74c81a8-192a-463f-a0a6-2d327963714f';
    const inputType = 'Date';

    const question: WFSerialization = {
      WFSerializationType: 'WFSerialization' as WFSerializationType,
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

    const defaultAnswer: WFSerialization = {
      WFSerializationType: 'WFSerialization' as WFSerializationType,
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
      WFWorkflowActionIdentifier: 'is.workflow.actions.ask',
      WFWorkflowActionParameters: {
        WFInputType: inputType,
        WFAskActionDefaultAnswer: defaultAnswer,
        WFAskActionPrompt: question,
      },
    };

    const actual = ask({
      inputType,
      question,
      defaultAnswer,
    });

    expect(actual).toEqual(expected);
  });

});
