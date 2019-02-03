import { runJavaScriptOnWebPage } from '../../src/actions';

describe('runJavaScriptOnWebPage function', () => {

  it('is a function', () => {
    expect(typeof runJavaScriptOnWebPage).toBe('function');
  });

  it('builds a runJavaScriptOnWebPage action without a given string', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.runjavascriptonwebpage',
      WFWorkflowActionParameters: {
        WFJavaScript: '',
      },
    };
    const actual = runJavaScriptOnWebPage({});

    expect(actual).toEqual(expected);
  });

  it('builds a runJavaScriptOnWebPage action with a code string', () => {
    const text = 'var result = "Hello World"; \n \n completion(result);';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.runjavascriptonwebpage',
      WFWorkflowActionParameters: {
        WFJavaScript: 'var result = "Hello World"; \n \n completion(result);',
      },
    };
    const actual = runJavaScriptOnWebPage({ text });

    expect(actual).toEqual(expected);
  });

});
