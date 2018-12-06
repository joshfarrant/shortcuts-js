import { detectLanguageWithMicrosoft } from '../../src/actions';

describe('detectLanguageWithMicrosoft function', () => {
  it('is a function', () => {
    expect(typeof detectLanguageWithMicrosoft).toBe('function');
  });

  it('builds a detect language with microsoft action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detectlanguage',
      WFWorkflowActionParameters: {},
    };
    const actual = detectLanguageWithMicrosoft();

    expect(actual).toEqual(expected);
  });
});
