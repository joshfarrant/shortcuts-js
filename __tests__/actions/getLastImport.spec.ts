import { getLastImport } from '../../src/actions';

describe('getLastImport function', () => {
  it('is a function', () => {
    expect(typeof getLastImport).toBe('function');
  });

  it('builds a get last import action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getlatestphotoimport',
      WFWorkflowActionParameters: {},
    };
    const actual = getLastImport();

    expect(actual).toEqual(expected);
  });
});
