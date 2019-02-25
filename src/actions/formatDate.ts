import { withActionOutput } from '../utils/withActionOutput';

import WFDateFormatStyle from '../interfaces/WF/WFDateFormatStyle';
import WFRelativeDateFormatStyle from '../interfaces/WF/WFRelativeDateFormatStyle';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFTimeFormatStyle from '../interfaces/WF/WFTimeFormatStyle';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

interface Options {
  dateFormat?: WFSerialization | WFDateFormatStyle;
  timeFormat?: WFSerialization | WFTimeFormatStyle;
  alternativeFormat?: WFSerialization | WFRelativeDateFormatStyle;
  includeISO8601Time?: WFSerialization | boolean;
  formatString?: WFSerialization | string;
}

const identifier = 'is.workflow.actions.format.date';

/**
 * @action Format Date
 * @section Content Types > Calendar > Dates
 * @icon Date
 *
 * Formats a date and time into text.
 *
 * ```js
 * formatDate({
 *   dateFormat: 'Custom',
 *   formatString: 'HH:mm',
 * });
 * ```
 */
const formatDate = (
  {
    /** The date format to use */
    dateFormat = 'Short',
    /** The time format to use */
    timeFormat = 'Short',
    /** The alternative format to use for relative date format */
    alternativeFormat = 'Medium',
    /** Whether to use ISO 8601 time */
    includeISO8601Time = false,
    /** The custom format string to use */
    formatString = 'EEE, dd MMM yyyy HH:mm:ss Z',
  }: Options,
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: identifier,
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
});

const invert = (
  WFAction: WFWorkflowAction,
): Options => ({
  dateFormat: WFAction.WFWorkflowActionParameters.WFDateFormatStyle,
  ...(
    WFAction.WFWorkflowActionParameters.WFDateFormatStyle !== 'RFC 2822'
    && WFAction.WFWorkflowActionParameters.WFDateFormatStyle !== 'ISO 8601'
    && WFAction.WFWorkflowActionParameters.WFDateFormatStyle !== 'Custom'
    && { timeFormat: WFAction.WFWorkflowActionParameters.WFTimeFormatStyle }
  ),
  ...(
    WFAction.WFWorkflowActionParameters.WFDateFormatStyle === 'Relative'
    && { alternativeFormat: WFAction.WFWorkflowActionParameters.WFRelativeDateFormatStyle }
  ),
  ...(
    WFAction.WFWorkflowActionParameters.WFDateFormatStyle === 'ISO 8601'
    && { includeISO8601Time: WFAction.WFWorkflowActionParameters.WFISO8601IncludeTime }
  ),
  ...(
    WFAction.WFWorkflowActionParameters.WFDateFormatStyle === 'Custom'
    && { formatString: WFAction.WFWorkflowActionParameters.WFDateFormat }
  ),
});

formatDate.identifier = identifier;
formatDate.invert = invert;

export default withActionOutput(formatDate);
