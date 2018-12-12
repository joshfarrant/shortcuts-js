import Variable from '../interfaces/Variable';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Variable Action. Gets the value of the specified variable and passes it to the next action.
 *
 * ```js
 * getVariable({
 *   variable: variable('My Variable'),
 * });
 * ```
 */
const getVariable = (
  options: {
    /** The variable to get */
    variable: Variable;
  },
): WFWorkflowAction => {
  const {
    variable,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.getvariable',
    WFWorkflowActionParameters: {
      WFVariable: variable,
    },
  };
};

export default getVariable;
