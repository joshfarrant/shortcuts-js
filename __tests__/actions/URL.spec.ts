import { URL } from '../../src/actions';

import WFWorkflowActionIdentifier from '../../src/interfaces/WF/WFWorkflowActionIdentifier';

describe('URL function', () => {

  it('is a function', () => {
    expect(typeof URL).toBe('function');
  });

  it('has an identifier property, which is a string', () => {
    expect(typeof URL.identifier).toBe('string');
  });

  it('has an invert property, which is a function', () => {
    expect(typeof URL.invert).toBe('function');
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

  it('inverts a URL action', () => {
    if (URL.invert) {
      const action = {
        WFWorkflowActionIdentifier: 'is.workflow.actions.url' as WFWorkflowActionIdentifier,
        WFWorkflowActionParameters: {
          WFURLActionURL: '',
        },
      };
      const actual = URL.invert(action);
      const expected = {
        url: '',
      };

      expect(actual).toEqual(expected);
    }
  });
});
