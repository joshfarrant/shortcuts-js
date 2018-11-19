import { getName } from '../../src/actions';

describe('getName function', () => {

  it('is a function', () => {
    expect(typeof getName).toBe('function');
  });

  it('builds a getName action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.getitemname',
      WFWorkflowActionParameters: {},
    };
    const actual = getName({});

    expect(actual).toEqual(expected);
  });

});
