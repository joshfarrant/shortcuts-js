import { getLinkToFile } from '../../src/actions';

describe('getLinkToFile function', () => {
  it('is a function', () => {
    expect(typeof getLinkToFile).toBe('function');
  });

  it('builds a get link to file action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.file.getlink',
      WFWorkflowActionParameters: {},
    };
    const actual = getLinkToFile();

    expect(actual).toEqual(expected);
  });
});
