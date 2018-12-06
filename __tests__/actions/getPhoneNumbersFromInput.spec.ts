import { getPhoneNumbersFromInput } from '../../src/actions';

describe('getPhoneNumbersFromInput function', () => {
  it('is a function', () => {
    expect(typeof getPhoneNumbersFromInput).toBe('function');
  });

  it('builds a get phone numbers from input action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.detect.phonenumber',
      WFWorkflowActionParameters: {},
    };
    const actual = getPhoneNumbersFromInput();

    expect(actual).toEqual(expected);
  });
});
