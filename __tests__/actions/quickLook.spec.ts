import { quickLook } from '../../src/actions';

describe('quickLook function', () => {

  it('is a function', () => {
    expect(typeof quickLook).toBe('function');
  });

  it('builds a quickLook action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.previewdocument',
      WFWorkflowActionParameters: {},
    };
    const actual = quickLook({});

    expect(actual).toEqual(expected);
  });

});
