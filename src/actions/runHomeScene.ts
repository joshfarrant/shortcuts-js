import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Run Home Scene
 * @section Content Types > Home >
 * @icon Home
 *
 * Runs a specific or user selected Home scene
 *
 * ```js
 * // Run a specific scene at home
 * runHomeScene({
 *    homeName: 'My House', // You can find your name in the Home app
 *    sceneName: 'Workday'
 * });
 * // Let the user select the scene for a spefiic home
 * runHomeScene({
 *    homeName: 'My House',
 *    sceneName: askWhenRun
  * });
  * ```
  */

const runHomeScene = (
  {
    homeName,
    sceneName,
  }: {
    /** String of the home's name. */
    homeName: WFSerialization | string,
    /** String of the scene's name. */
    sceneName: WFSerialization | string,
  }): WFWorkflowAction => ({
    WFWorkflowActionIdentifier: 'is.workflow.actions.runscene',
    WFWorkflowActionParameters: {
      WFHomeName: homeName,
      WFHomeSceneName: sceneName,
    },
  });

export default runHomeScene;
