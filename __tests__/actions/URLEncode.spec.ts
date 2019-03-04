import { URLEncode } from '../../src/actions';

import WFWorkflowActionIdentifier from '../../src/interfaces/WF/WFWorkflowActionIdentifier';
import WFWorkflowActionParameters from '../../src/interfaces/WF/WFWorkflowActionParameters';

describe('URLEncode function', () => {

  it('is a function', () => {
    expect(typeof URLEncode).toBe('function');
  });

  it('has an identifier property, which is a string', () => {
    expect(typeof URLEncode.identifier).toBe('string');
  });

  it('has an invert property, which is a function', () => {
    expect(typeof URLEncode.invert).toBe('function');
  });

  it('builds a URLEncode action (encode)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.urlencode',
      WFWorkflowActionParameters: {
        WFEncodeMode: 'Encode',
      },
    };
    const actual = URLEncode({});

    expect(actual).toEqual(expected);
  });

  it('builds a URLEncode action (decode)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.urlencode',
      WFWorkflowActionParameters: {
        WFEncodeMode: 'Decode',
      },
    };
    const actual = URLEncode({
      encodeMode: 'Decode',
    });

    expect(actual).toEqual(expected);
  });

  it('inverts a URLEncode action', () => {
    if (URLEncode.invert) {
      const action = {
        WFWorkflowActionIdentifier: 'is.workflow.actions.urlencode' as WFWorkflowActionIdentifier,
        WFWorkflowActionParameters: {
          WFEncodeMode: '' as WFWorkflowActionParameters['WFEncodeMode'],
        },
      };
      const actual = URLEncode.invert(action);
      const expected = {
        encodeMode: 'Decode',
      };

      expect(actual).toEqual(expected);
    }
  });
});
