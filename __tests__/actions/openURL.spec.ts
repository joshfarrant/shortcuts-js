import { openURL } from '../../src/actions';

describe('openURL function', () => {
  it('is a function', () => {
    expect(typeof openURL).toBe('function');
  });

  it('builds a open URL action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.openurl',
      WFWorkflowActionParameters: {},
    };
    const actual = openURL();

    expect(actual).toEqual(expected);
  });
});
