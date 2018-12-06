import { expandURL } from '../../src/actions';

describe('expandURL function', () => {
  it('is a function', () => {
    expect(typeof expandURL).toBe('function');
  });

  it('builds an expand url action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.url.expand',
      WFWorkflowActionParameters: {},
    };
    const actual = expandURL();

    expect(actual).toEqual(expected);
  });
});
