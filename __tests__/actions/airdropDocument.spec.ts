import { airdropDocument } from '../../src/actions';

describe('airdropDocument function', () => {
  it('is a function', () => {
    expect(typeof airdropDocument).toBe('function');
  });

  it('builds an airdop action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.airdropdocument',
      WFWorkflowActionParameters: {},
    };
    const actual = airdropDocument();

    expect(actual).toEqual(expected);
  });
});
