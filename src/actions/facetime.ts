import FaceTimeType from '../interfaces/WF/FaceTimeType';
import WFSerialization from '../interfaces/WF/WFSerialization';
import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action FaceTime
 * @section Content Types > Contacts > Phone
 * @icon FaceTime
 *
 * Facetime the contact, the text, place or phone number given as input.
 *
 * ```js
 * facetime({}); // Default type is Video
 * facetime({ type: askWhenRun }); // type could be 'Audio' or 'Video'
 * ```
 */

const facetime = ({
  type = 'Video',
}: {
  /** Define the type to use for the FaceTime. Default to 'Video' */
  type?: WFSerialization | FaceTimeType,
}): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'com.apple.facetime.facetime',
  WFWorkflowActionParameters: {
    WFFaceTimeType: type,
  },
});

export default facetime;
