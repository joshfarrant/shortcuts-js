import FaceTimeType from '../interfaces/WF/FaceTimeType';
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
 * facetime({ type: 'Ask' }); // type could be 'Audio' or 'Video' also
 * ```
 */

const facetime = ({
  type = 'Video',
}: {
  /** Define the type to use for the FaceTime. Default to 'Video' */
  type?: FaceTimeType,
}): WFWorkflowAction => {
  return {
    WFWorkflowActionIdentifier: 'com.apple.facetime.facetime',
    WFWorkflowActionParameters: {
      WFFaceTimeType: {
        Value: {
          Type: type,
        },
        WFSerializationType: 'WFTextTokenAttachment',
      },
    },
  };
};

export default facetime;
