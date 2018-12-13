import { createAlarm } from '../../src/actions';

describe('createAlarm function', () => {

  it('is a function', () => {
    expect(typeof createAlarm).toBe('function');
  });

  it('builds a createAlarm action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.alarm.create',
      WFWorkflowActionParameters: {
        WFLabel: '',
        WFTime: '',
        WFFrequency: [],
      },
    };
    const actual = createAlarm({});

    expect(actual).toEqual(expected);
  });

  it('builds a createAlarm action with nonrepeating alarm inputs', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.alarm.create',
      WFWorkflowActionParameters: {
        WFLabel: 'Label for 7:42 PM alarm',
        WFTime: '7:42 PM',
        WFFrequency: [],
      },
    };
    const actual = createAlarm({
      label: 'Label for 7:42 PM alarm',
      time: '7:42 PM',
    });

    expect(actual).toEqual(expected);
  });

  it('builds a createAlarm action with repeating days', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.alarm.create',
      WFWorkflowActionParameters: {
        WFLabel: 'Label for 7:42 PM alarm',
        WFTime: '7:42 PM',
        WFFrequency: ['Sunday', 'Tuesday', 'Friday'],
      },
    };
    const actual = createAlarm({
      label: 'Label for 7:42 PM alarm',
      time: '7:42 PM',
      repeat: ['Sunday', 'Tuesday', 'Friday'],
    });

    expect(actual).toEqual(expected);
  });

});
