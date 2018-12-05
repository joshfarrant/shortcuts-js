import { airDrop } from '../../src/actions';

describe('airDrop function', () => {

  it('is a function', () => {
    expect(typeof airDrop).toBe('function');
  });

  it('builds a airDrop action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.airdropdocument',
      WFWorkflowActionParameters: {},
    };
    const actual = airDrop({});

    expect(actual).toEqual(expected);
  });

});
