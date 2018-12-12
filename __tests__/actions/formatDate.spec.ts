import { formatDate } from '../../src/actions';

describe('formatDate function', () => {

  it('is a function', () => {
    expect(typeof formatDate).toBe('function');
  });

  it('builds a format date action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.format.date',
      WFWorkflowActionParameters: {
        WFDateFormatStyle: 'Short',
        WFTimeFormatStyle: 'Short',
      },
    };
    const actual = formatDate({});

    expect(actual).toEqual(expected);
  });

  it('builds a format date action when date and time formats are passed', () => {
    const dateFormat = 'None';
    const timeFormat = 'Long';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.format.date',
      WFWorkflowActionParameters: {
        WFDateFormatStyle: dateFormat,
        WFTimeFormatStyle: timeFormat,
      },
    };
    const actual = formatDate({
      dateFormat,
      timeFormat,
    });

    expect(actual).toEqual(expected);
  });

  it('builds a format date action when relative date format is passed', () => {
    const dateFormat = 'Relative';
    const timeFormat = 'Medium';
    const alternativeFormat = 'Long';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.format.date',
      WFWorkflowActionParameters: {
        WFDateFormatStyle: dateFormat,
        WFRelativeDateFormatStyle: alternativeFormat,
        WFTimeFormatStyle: timeFormat,
      },
    };
    const actual = formatDate({
      dateFormat,
      timeFormat,
      alternativeFormat,
    });

    expect(actual).toEqual(expected);
  });

  it('builds a format date action when RFC 2822 date format is passed', () => {
    const dateFormat = 'RFC 2822';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.format.date',
      WFWorkflowActionParameters: {
        WFDateFormatStyle: dateFormat,
      },
    };
    const actual = formatDate({
      dateFormat,
    });

    expect(actual).toEqual(expected);
  });

  it('builds a format date action when ISO 8601 date format is passed', () => {
    const dateFormat = 'ISO 8601';
    const includeISO8601Time = true;

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.format.date',
      WFWorkflowActionParameters: {
        WFDateFormatStyle: dateFormat,
        WFISO8601IncludeTime: includeISO8601Time,
      },
    };
    const actual = formatDate({
      dateFormat,
      includeISO8601Time,
    });

    expect(actual).toEqual(expected);
  });

  it('builds a format date action when format string is passed', () => {
    const dateFormat = 'Custom';
    const formatString = 'dd/MM/yyyy \'at\' HH:mm';

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.format.date',
      WFWorkflowActionParameters: {
        WFDateFormat: formatString,
        WFDateFormatStyle: dateFormat,
      },
    };
    const actual = formatDate({
      dateFormat,
      formatString,
    });

    expect(actual).toEqual(expected);
  });

});
