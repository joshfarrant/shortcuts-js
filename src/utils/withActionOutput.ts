import Variable from '../interfaces/Variable';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/** @ignore */
export const withActionOutput = <OptionsType>(
  actionBuilder: (options: OptionsType) => WFWorkflowAction | WFWorkflowAction[],
) => (
  (
    options: OptionsType,
    output?: Variable,
  ): WFWorkflowAction | WFWorkflowAction[] => {
    const action = actionBuilder(options);

    if (output) {
      const actionToModify = Array.isArray(action) ? action[action.length - 1] : action;

      actionToModify.WFWorkflowActionParameters.UUID = output.Value.OutputUUID;
      if (output.Value.OutputName) {
        actionToModify.WFWorkflowActionParameters.CustomOutputName = output.Value.OutputName;
      }
    }
    return action;
  }
);
