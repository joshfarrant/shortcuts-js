import { runJavascriptOnWebPage } from '../../src/actions';

describe('runJavascriptOnWebPage function', () => {

  it('is a function', () => {
    expect(typeof runJavascriptOnWebPage).toBe('function');
  });

  it('builds a runJavascriptOnWebPage action without a given string', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.runjavascriptonwebpage',
      WFWorkflowActionParameters: {
        WFJavaScript: '',
      },
    };
    const actual = runJavascriptOnWebPage({});

    expect(actual).toEqual(expected);
  });

  it('builds a runJavascriptOnWebPage action with a code string', () => {
    const text = 'var result = "Hello World"; \n \n completion(result);';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.runjavascriptonwebpage',
      WFWorkflowActionParameters: {
        WFJavaScript: 'var result = "Hello World"; \n \n completion(result);',
      },
    };
    const actual = runJavascriptOnWebPage({ text });

    expect(actual).toEqual(expected);
  });

});
