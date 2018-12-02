import Variable from '../interfaces/Variable';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/** @ignore */
export const withActionOutput = <OptionsType>(
  actionBuilder: (options: OptionsType) => WFWorkflowAction,
) => (
  (
    options: OptionsType,
    output?: Variable,
  ): WFWorkflowAction => {
    const action = actionBuilder(options);

    if (output) {
      action.WFWorkflowActionParameters.UUID = output.Value.OutputUUID;
      if (output.Value.OutputName) {
        action.WFWorkflowActionParameters.CustomOutputName = output.Value.OutputName;
      }
    }
    return action;
  }
);
