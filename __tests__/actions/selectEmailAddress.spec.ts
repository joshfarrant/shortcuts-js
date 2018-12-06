import { selectEmailAddress } from '../../src/actions';

describe('selectEmailAddress function', () => {
  it('is a function', () => {
    expect(typeof selectEmailAddress).toBe('function');
  });

  it('builds a select email address action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.selectemail',
      WFWorkflowActionParameters: {},
    };
    const actual = selectEmailAddress({});

    expect(actual).toEqual(expected);
  });
});
