import { changeCase } from '../../src/actions';
import WFSerialization from '../../src/interfaces/WF/WFSerialization';

describe('changeCase function', () => {
  it('is a function', () => {
    expect(typeof changeCase).toBe('function');
  });

  it('builds a change case action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.changecase',
      WFWorkflowActionParameters: {},
    };
    const actual = changeCase({});

    expect(actual).toEqual(expected);
  });

  it('builds a change case action with "lowercase"', () => {
    const caseType = 'lowercase';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.changecase',
      WFWorkflowActionParameters: {
        WFCaseType: caseType,
      },
    };
    const actual = changeCase({ caseType });

    expect(actual).toEqual(expected);
  });

  it('builds a change case action with "Capitalize Every Word"', () => {
    const caseType = 'Capitalize Every Word';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.changecase',
      WFWorkflowActionParameters: {
        WFCaseType: caseType,
      },
    };
    const actual = changeCase({ caseType });

    expect(actual).toEqual(expected);
  });

  it('builds a change case action with "Capitalize with Title Case"', () => {
    const caseType = 'Capitalize with Title Case';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.changecase',
      WFWorkflowActionParameters: {
        WFCaseType: caseType,
      },
    };
    const actual = changeCase({ caseType });

    expect(actual).toEqual(expected);
  });

  it('builds a change case action with "Capitalize with sentence case."', () => {
    const caseType = 'Capitalize with sentence case.';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.changecase',
      WFWorkflowActionParameters: {
        WFCaseType: caseType,
      },
    };
    const actual = changeCase({ caseType });

    expect(actual).toEqual(expected);
  });

  it('builds a change case action with "cApItAlIzE wItH aLtErNaTiNg CaSe."', () => {
    const caseType = 'cApItAlIzE wItH aLtErNaTiNg CaSe.';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.changecase',
      WFWorkflowActionParameters: {
        WFCaseType: caseType,
      },
    };
    const actual = changeCase({ caseType });

    expect(actual).toEqual(expected);
  });

  it('builds a change case action with "Ask"', () => {
    const caseType : WFSerialization = {
      Value: {
        Type: 'Ask',
      },
      WFSerializationType: 'WFTextTokenAttachment',
    };

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.text.changecase',
      WFWorkflowActionParameters: {
        WFCaseType: caseType,
      },
    };
    const actual = changeCase({ caseType });

    expect(actual).toEqual(expected);
  });
});
