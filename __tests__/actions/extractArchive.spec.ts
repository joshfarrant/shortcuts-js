import { extractArchive } from '../../src/actions';

describe('extractArchive function', () => {
  it('is a function', () => {
    expect(typeof extractArchive).toBe('function');
  });

  it('builds a extract archive action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.unzip',
      WFWorkflowActionParameters: {},
    };
    const actual = extractArchive();

    expect(actual).toEqual(expected);
  });
});
