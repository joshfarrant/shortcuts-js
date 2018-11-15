import { setBrightness } from '../../src/actions';

describe('setBrightness function', () => {

  it('is a function', () => {
    expect(typeof setBrightness).toBe('function');
  });

  it('builds a set brightness action when no value is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setbrightness',
      WFWorkflowActionParameters: {
        WFBrightness: 100,
      },
    };
    const actual = setBrightness({});

    expect(actual).toEqual(expected);
  });

  it('builds a set brightness action when a value is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setbrightness',
      WFWorkflowActionParameters: {
        WFBrightness: 50,
      },
    };
    const actual = setBrightness({
      brightness: 50,
    });

    expect(actual).toEqual(expected);
  });

});
