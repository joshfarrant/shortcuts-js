import { markup } from '../../src/actions';

describe('markup function', () => {

  it('is a function', () => {
    expect(typeof markup).toBe('function');
  });

  it('builds a markup action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.avairyeditphoto',
      WFWorkflowActionParameters: {},
    };
    const actual = markup({});

    expect(actual).toEqual(expected);
  });

});
