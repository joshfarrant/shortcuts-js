import { getNameOfEmoji } from '../../src/actions';

describe('getNameOfEmoji function', () => {
  it('is a function', () => {
    expect(typeof getNameOfEmoji).toBe('function');
  });

  it('builds a get name of emoji action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getnameofemoji',
      WFWorkflowActionParameters: {},
    };
    const actual = getNameOfEmoji({});

    expect(actual).toEqual(expected);
  });
});
