import { shareWithExtensions } from '../../src/actions';

describe('shareWithExtensions function', () => {
  it('is a function', () => {
    expect(typeof shareWithExtensions).toBe('function');
  });

  it('builds an share with extensions action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.runextension',
      WFWorkflowActionParameters: {},
    };
    const actual = shareWithExtensions();

    expect(actual).toEqual(expected);
  });
});
