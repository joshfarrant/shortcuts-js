import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Detect Language with Microsoft Action. Detects the language of the text providedas input.
 *
 * ```js
 * detectLanguage();
 * ```
 */

const detectLanguage = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.detectlanguage',
  WFWorkflowActionParameters: {},
});

export default detectLanguage;
