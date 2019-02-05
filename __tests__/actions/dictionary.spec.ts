import { dictionary } from '../../src/actions';
import { buildSerialization } from '../../src/utils';

describe('dictionary function', () => {
  it('is a function', () => {
    expect(typeof dictionary).toBe('function');
  });

  it('builds a dictionary action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.dictionary',
      WFWorkflowActionParameters: {},
    };
    const actual = dictionary({});

    expect(actual).toEqual(expected);
  });

  it('builds a dictionary action when passed a value', () => {
    const value = {
      hello: 'world!',
      myNum: 7,
      myArray: ['a', 'b', 'c', 'etc'],
      myObj: {
        anotherString: 'How deep does this thing go?',
      },
    };

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.dictionary',
      WFWorkflowActionParameters: {
        WFItems: buildSerialization(value),
      },
    };
    const actual = dictionary({
      value,
    });

    expect(actual).toEqual(expected);
  });
});
