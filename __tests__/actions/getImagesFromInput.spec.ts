import { getImagesFromInput } from '../../src/actions';

describe('getImagesFromInput function', () => {
  it('is a function', () => {
    expect(typeof getImagesFromInput).toBe('function');
  });

  it('builds a get images from input action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detect.images',
      WFWorkflowActionParameters: {},
    };
    const actual = getImagesFromInput();

    expect(actual).toEqual(expected);
  });
});
