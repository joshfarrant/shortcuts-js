import { correctSpelling } from '../../src/actions';

describe('correctSpelling function', () => {
  it('is a function', () => {
    expect(typeof correctSpelling).toBe('function');
  });

  it('builds a correct spelling action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.correctspelling',
      WFWorkflowActionParameters: {},
    };
    const actual = correctSpelling();

    expect(actual).toEqual(expected);
  });
});
