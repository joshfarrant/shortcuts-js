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
        const actionSingle = <WFWorkflowAction>action;
        if (actionSingle.WFWorkflowActionIdentifier) {
          actionSingle.WFWorkflowActionParameters.UUID = output.Value.OutputUUID;
          if (output.Value.OutputName) {
            actionSingle.WFWorkflowActionParameters.CustomOutputName = output.Value.OutputName;
          }
        } else {
          const actionList = <WFWorkflowAction[]>action;
          const firstActionBlock = actionList[0];
          const lastActionBlock = actionList[actionList.length - 1];
          firstActionBlock.WFWorkflowActionParameters.UUID = output.Value.OutputUUID;
          lastActionBlock.WFWorkflowActionParameters.UUID = output.Value.OutputUUID;
          if (output.Value.OutputName) {
            firstActionBlock.WFWorkflowActionParameters.CustomOutputName = output.Value.OutputName;
            lastActionBlock.WFWorkflowActionParameters.CustomOutputName = output.Value.OutputName;
          }
        }
      }
      return action;
    }
  );
