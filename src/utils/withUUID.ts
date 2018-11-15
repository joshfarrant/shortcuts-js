import * as uuidv4 from 'uuid/v4';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

export const withUUID = <OptionsType>(
  actionBuilder: (options: OptionsType) => WFWorkflowAction,
) => (
  (
    options: OptionsType,
    callback?: (uuid: string) => void,
  ): WFWorkflowAction => {
    const action = actionBuilder(options);

    // If we've got a callback, then add the UUID and call the callback
    if (typeof callback === 'function') {
      const uuid = uuidv4();
      callback(uuid);

      action.WFWorkflowActionParameters.UUID = uuid;
    }
    return action;
  }
);
