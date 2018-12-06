import { deletePhotos } from '../../src/actions';

describe('deletePhotos function', () => {
  it('is a function', () => {
    expect(typeof deletePhotos).toBe('function');
  });

  it('builds a delete photos action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.deletephotos',
      WFWorkflowActionParameters: {},
    };
    const actual = deletePhotos();

    expect(actual).toEqual(expected);
  });
});
