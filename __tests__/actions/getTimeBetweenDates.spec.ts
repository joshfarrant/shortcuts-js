import { getTimeBetweenDates } from '../../src/actions';
import { askWhenRun } from '../../src/variables';

import WFSerialization from '../../src/interfaces/WF/WFSerialization';

describe('getTimeBetweenDates function', () => {

  it('is a function', () => {
    expect(typeof getTimeBetweenDates).toBe('function');
  });

  it('builds a getTimeBetweenDates action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
      WFWorkflowActionParameters: {},
    };
    const actual = getTimeBetweenDates({});

    expect(actual).toEqual(expected);
  });

  it('builds a getTimeBetweenDates action with a specified time unit', () => {
    const unit = 'Hours';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
      WFWorkflowActionParameters: {
        WFTimeUntilUnit: unit,
      },
    };

    const actual = getTimeBetweenDates({ unit });

    expect(actual).toEqual(expected);
  });

  it('builds a getTimeBetweenDates action that asks for time unit when run', () => {
    const unit = askWhenRun;

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
      WFWorkflowActionParameters: {
        WFTimeUntilUnit: unit,
      },
    };

    const actual = getTimeBetweenDates({ unit });

    expect(actual).toEqual(expected);
  });

  it('builds a getTimeBetweenDates action that has a custom start time', () => {
    const date = '3/5/2011 5:42PM';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
      WFWorkflowActionParameters: {
        WFTimeUntilReferenceDate: 'Other',
        WFTimeUntilCustomDate: date,
      },
    };

    const actual = getTimeBetweenDates({ date });

    expect(actual).toEqual(expected);
  });

  it('builds a getTimeBetweenDates action that has a garbage custom start time', () => {
    const date = 'thisIsGarbageButItIsStillValid';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
      WFWorkflowActionParameters: {
        WFTimeUntilReferenceDate: 'Other',
        WFTimeUntilCustomDate: date,
      },
    };

    const actual = getTimeBetweenDates({ date });

    expect(actual).toEqual(expected);
  });

  it('builds a getTimeBetweenDates action that has a custom start time and unit', () => {
    const unit = 'Hours';
    const date = '3/5/2011 5:42PM';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
      WFWorkflowActionParameters: {
        WFTimeUntilUnit: unit,
        WFTimeUntilReferenceDate: 'Other',
        WFTimeUntilCustomDate: date,
      },
    };

    const actual = getTimeBetweenDates({ unit, date });

    expect(actual).toEqual(expected);
  });

  it('builds a getTimeBetweenDates action that asks for a custom time when run', () => {
    const customDateAsk: WFSerialization = {
      Value: {
        string: '￼', // Object replacement character
        attachmentsByRange: {
          '{0, 1}': {
            Type: 'Ask',
          },
        },
      },
      WFSerializationType: 'WFTextTokenString',
    };

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
      WFWorkflowActionParameters: {
        WFTimeUntilReferenceDate: 'Other',
        WFTimeUntilCustomDate: customDateAsk,
      },
    };

    const actual = getTimeBetweenDates({ date: customDateAsk });

    expect(actual).toEqual(expected);
  });

  it('builds a getTimeBetweenDates action that uses a variable for a custom time', () => {
    const variableObject: WFSerialization = {
      Value: {
        string: '￼', // Object replacement character
        attachmentsByRange: {
          '{0, 1}': {
            OutputUUID: 'b74c81a8-192a-463f-a0a6-2d327963714f',
            Type: 'ActionOutput',
          },
        },
      },
      WFSerializationType: 'WFTextTokenString',
    };

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
      WFWorkflowActionParameters: {
        WFTimeUntilReferenceDate: 'Other',
        WFTimeUntilCustomDate: variableObject,
      },
    };

    const actual = getTimeBetweenDates({ date: variableObject });

    expect(actual).toEqual(expected);
  });

  it('builds a getTimeBetweenDates action that asks for a unit and custom time when run', () => {
    const unit = askWhenRun;
    const customDateAsk: WFSerialization = {
      Value: {
        string: '￼', // Object replacement character
        attachmentsByRange: {
          '{0, 1}': {
            Type: 'Ask',
          },
        },
      },
      WFSerializationType: 'WFTextTokenString',
    };

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.gettimebetweendates',
      WFWorkflowActionParameters: {
        WFTimeUntilUnit: unit,
        WFTimeUntilReferenceDate: 'Other',
        WFTimeUntilCustomDate: customDateAsk,
      },
    };

    const actual = getTimeBetweenDates({ unit, date: customDateAsk });

    expect(actual).toEqual(expected);
  });
});
