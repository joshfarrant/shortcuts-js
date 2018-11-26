/** @module utils */
import WFWorkflowActionsInterface from "../interfaces/WF/WFWorkflowAction";
/**
 * Builds a shortcut from an array of actions.
 * @param {Array} [actions=[]] An array of actions
 * @return {string} The built shortcut
 */
export declare const buildShortcut: (actions: WFWorkflowActionsInterface[] | undefined, options: {
    icon: {
        color: number;
        glyph: number;
    };
}) => string;
