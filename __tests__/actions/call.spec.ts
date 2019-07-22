import { call } from '../../src/actions';

describe('call function', () => {
  it('is a function', () => {
    expect(typeof call).toBe('function');
  });

  it('builds a call action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'com.apple.mobilephone.call',
      WFWorkflowActionParameters: {},
    };
    const actual = call();

    expect(actual).toEqual(expected);
  });
});
