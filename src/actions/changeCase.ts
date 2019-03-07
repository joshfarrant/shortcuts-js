import WFCaseType from '../interfaces/WF/WFCaseType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Change Case
 * @section Content Types > Text > Change Case
 * @icon Text
 *
 * Changes the case of the text passed into the action to UPPERCASE, lowercase or Title Case.
 *
 * ```js
 * changeCase({});
 * ```
 */

const changeCase = (
  {
    caseType,
  }: {
    /** The particular casing format. */
    caseType?: WFCaseType | WFSerialization;
  },
): WFWorkflowAction => {
  const parameters = caseType ?
  {
    WFCaseType: caseType,
  } : {};

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.text.changecase',
    WFWorkflowActionParameters: parameters,
  };
};

export default changeCase;
