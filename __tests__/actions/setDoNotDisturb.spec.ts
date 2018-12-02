import { setDoNotDisturb } from '../../src/actions';

describe('setDoNotDisturb function', () => {

  it('is a function', () => {
    expect(typeof setDoNotDisturb).toBe('function');
  });

  it('builds a default setDoNotDisturb action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.dnd.set',
      WFWorkflowActionParameters: {
        Enabled: true,
        AssertionType: 'Turned Off',
        Time: '08:00',
        Event: '',
      },
    };
    const actual = setDoNotDisturb({});

    expect(actual).toEqual(expected);
  });

  it('builds a setDoNotDisturb action that is turned off', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.dnd.set',
      WFWorkflowActionParameters: {
        Enabled: false,
        AssertionType: 'Turned Off',
        Time: '08:00',
        Event: '',
      },
    };
    const actual = setDoNotDisturb({
      value: false,
    });

    expect(actual).toEqual(expected);
  });

  it('builds a setDoNotDisturb action that is active until turned off', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.dnd.set',
      WFWorkflowActionParameters: {
        Enabled: true,
        AssertionType: 'Turned Off',
        Time: '08:00',
        Event: '',
      },
    };
    const actual = setDoNotDisturb({
      value: true,
      until: 'Turned Off',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a setDoNotDisturb action that is active until I leave', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.dnd.set',
      WFWorkflowActionParameters: {
        Enabled: true,
        AssertionType: 'I Leave',
        Time: '08:00',
        Event: '',
      },
    };
    const actual = setDoNotDisturb({
      value: true,
      until: 'I Leave',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a setDoNotDisturb action that is active until the event ends', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.dnd.set',
      WFWorkflowActionParameters: {
        Enabled: true,
        AssertionType: 'Event Ends',
        Time: '08:00',
        Event: '',
      },
    };
    const actual = setDoNotDisturb({
      value: true,
      until: 'Event Ends',
    });

    expect(actual).toEqual(expected);
  });

});
