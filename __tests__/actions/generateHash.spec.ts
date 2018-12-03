import { generateHash } from '../../src/actions';

describe('generateHash function', () => {

  it('is a function', () => {
    expect(typeof generateHash).toBe('function');
  });

  it('builds a generateHash action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.hash',
      WFWorkflowActionParameters: {
        WFHashType: 'MD5',
      },
    };
    const actual = generateHash({});

    expect(actual).toEqual(expected);
  });

  it('builds a generateHash action (MD5)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.hash',
      WFWorkflowActionParameters: {
        WFHashType: 'MD5',
      },
    };
    const actual = generateHash({
      type: 'MD5',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a generateHash action (SHA1)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.hash',
      WFWorkflowActionParameters: {
        WFHashType: 'SHA1',
      },
    };
    const actual = generateHash({
      type: 'SHA1',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a generateHash action (SHA256)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.hash',
      WFWorkflowActionParameters: {
        WFHashType: 'SHA256',
      },
    };
    const actual = generateHash({
      type: 'SHA256',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a generateHash action (SHA512)', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.hash',
      WFWorkflowActionParameters: {
        WFHashType: 'SHA512',
      },
    };
    const actual = generateHash({
      type: 'SHA512',
    });

    expect(actual).toEqual(expected);
  });

});
