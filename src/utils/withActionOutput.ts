import Variable from '../interfaces/Variable';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

export const withActionOutput = <OptionsType>(
  actionBuilder: {
    (options: OptionsType): WFWorkflowAction;
    identifier?: string;
    invert?: (WFAction: WFWorkflowAction) => OptionsType;
  },
) => {
  const result = (
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
  };

  result.identifier = actionBuilder.identifier;
  result.invert = actionBuilder.invert;

  return result;
};
