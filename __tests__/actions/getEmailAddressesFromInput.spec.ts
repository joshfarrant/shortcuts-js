import { getEmailAddressesFromInput } from '../../src/actions';

describe('getEmailAddressesFromInput function', () => {
  it('is a function', () => {
    expect(typeof getEmailAddressesFromInput).toBe('function');
  });

  it('builds a get email addresses from input action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detect.emailaddress',
      WFWorkflowActionParameters: {},
    };
    const actual = getEmailAddressesFromInput();

    expect(actual).toEqual(expected);
  });
});
