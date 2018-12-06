import { detectLanguage } from '../../src/actions';

describe('detectLanguage function', () => {
  it('is a function', () => {
    expect(typeof detectLanguage).toBe('function');
  });

  it('builds a detect language with microsoft action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detectlanguage',
      WFWorkflowActionParameters: {},
    };
    const actual = detectLanguage();

    expect(actual).toEqual(expected);
  });
});
