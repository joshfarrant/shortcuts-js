import WFWorkflow from "../interfaces/WF/WFWorkflow";
import WFWorkflowActionsInterface from "../interfaces/WF/WFWorkflowAction";
export declare const buildShortcutTemplate: (actions: WFWorkflowActionsInterface[] | undefined, options: {
    icon: {
        color: number;
        glyph: number;
    };
}) => WFWorkflow;
