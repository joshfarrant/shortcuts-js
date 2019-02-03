import { URL } from '../../src/actions';

describe('URL function', () => {

  it('is a function', () => {
    expect(typeof URL).toBe('function');
  });

  it('builds a URL action when no URL is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.url',
      WFWorkflowActionParameters: {
        WFURLActionURL: '',
      },
    };
    const actual = URL({});

    expect(actual).toEqual(expected);
  });

  it('builds a URL action with given URL', () => {
    const testUrl = '';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.url',
      WFWorkflowActionParameters: {
        WFURLActionURL: testUrl,
      },
    };
    const actual = URL({ url: testUrl });

    expect(actual).toEqual(expected);
  });

});
