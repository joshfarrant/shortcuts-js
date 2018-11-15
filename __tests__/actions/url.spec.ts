import { url } from '../../src/actions';

describe('url function', () => {

  it('is a function', () => {
    expect(typeof url).toBe('function');
  });

  it('builds a url action when no url is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.url',
      WFWorkflowActionParameters: {
        WFURLActionURL: '',
      },
    };
    const actual = url({});

    expect(actual).toEqual(expected);
  });

  it('builds a url action with given url', () => {
    const testUrl = '';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.url',
      WFWorkflowActionParameters: {
        WFURLActionURL: testUrl,
      },
    };
    const actual = url({ url: testUrl });

    expect(actual).toEqual(expected);
  });

});
