import { selectPhoneNumber } from '../../src/actions';

describe('selectPhoneNumber function', () => {
  it('is a function', () => {
    expect(typeof selectPhoneNumber).toBe('function');
  });

  it('builds a select phone number action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.selectphone',
      WFWorkflowActionParameters: {},
    };
    const actual = selectPhoneNumber();

    expect(actual).toEqual(expected);
  });
});
