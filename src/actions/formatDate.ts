import { withActionOutput } from '../utils';

import WFDateFormatStyle from '../interfaces/WF/WFDateFormatStyle';
import WFRelativeDateFormatStyle from '../interfaces/WF/WFRelativeDateFormatStyle';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFTimeFormatStyle from '../interfaces/WF/WFTimeFormatStyle';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Format Date Action. Formats a date and time into text.
 *
 * Custom format strings use the format patterns from Unicode Technical Standard #35
 * ([unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns](
 * http://unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns)).
 *
 * ```js
 * formatDate({
 *   dateFormat: 'Custom',
 *   formatString: 'HH:mm',
 * });
 * ```
 */
const formatDate = (
  options: {
    /** The date format to use */
    dateFormat?: WFSerialization | WFDateFormatStyle;
    /** The time format to use */
    timeFormat?: WFSerialization | WFTimeFormatStyle;
    /** The alternative format to use for relative date format */
    alternativeFormat?: WFSerialization | WFRelativeDateFormatStyle;
    /** Whether to use ISO 8601 time */
    includeISO8601Time?: WFSerialization | boolean;
    /** The custom format string to use */
    formatString?: WFSerialization | string;
  },
): WFWorkflowAction => {
  const {
    dateFormat = 'Short',
    timeFormat = 'Short',
    alternativeFormat = 'Medium',
    includeISO8601Time = false,
    formatString = 'EEE, dd MMM yyyy HH:mm:ss Z',
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.format.date',
    WFWorkflowActionParameters: {
      WFDateFormatStyle: dateFormat,
      ...(
        dateFormat !== 'RFC 2822' &&
        dateFormat !== 'ISO 8601' &&
        dateFormat !== 'Custom' && { WFTimeFormatStyle: timeFormat }
      ),
      ...(dateFormat === 'Relative' && { WFRelativeDateFormatStyle: alternativeFormat }),
      ...(dateFormat === 'ISO 8601' && { WFISO8601IncludeTime: includeISO8601Time }),
      ...(dateFormat === 'Custom' && { WFDateFormat: formatString }),
    },
  };
};

export default withActionOutput(formatDate);
