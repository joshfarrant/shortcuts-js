import { getContactsFromInput } from '../../src/actions';

describe('getContactsFromInput function', () => {
  it('is a function', () => {
    expect(typeof getContactsFromInput).toBe('function');
  });

  it('builds a get conacts from input action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detect.contacts',
      WFWorkflowActionParameters: {},
    };
    const actual = getContactsFromInput();

    expect(actual).toEqual(expected);
  });
});
