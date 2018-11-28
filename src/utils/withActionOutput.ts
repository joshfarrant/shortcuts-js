import Attachment from '../interfaces/WF/Attachment';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

export const withActionOutput = <OptionsType>(
  actionBuilder: (options: OptionsType) => WFWorkflowAction,
) => (
  (
    options: OptionsType,
    output?: Attachment,
  ): WFWorkflowAction => {
    const action = actionBuilder(options);

    if (output) {
      action.WFWorkflowActionParameters.UUID = output.OutputUUID;
      if (output.OutputName) {
        action.WFWorkflowActionParameters.CustomOutputName = output.OutputName;
      }
    }
    return action;
  }
);
