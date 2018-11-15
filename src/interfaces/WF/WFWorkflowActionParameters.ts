import WFAskActionDateGranularity from './WFAskActionDateGranularity';
import WFCondition from './WFCondition';
import WFCountType from './WFCountType';
import WFFlashlightSetting from './WFFlashlightSetting';
import WFHTTPBodyType from './WFHTTPBodyType';
import WFHTTPMethod from './WFHTTPMethod';
import WFInputType from './WFInputType';
import WFMathOperation from './WFMathOperation';
import WFSerialization from './WFSerialization';

interface WFWorkflowActionParameters {
  Advanced?: boolean;
  GroupingIdentifier?: string;
  ShowHeaders?: boolean;
  Text?: WFSerialization | string;
  UUID?: string;
  WFAskActionDateGranularity?: WFAskActionDateGranularity;
  WFAskActionDefaultAnswer?: WFSerialization | string;
  WFAskActionPrompt?: WFSerialization | string;
  WFBrightness?: number;
  WFCommentActionText?: string;
  WFCondition?: WFCondition;
  WFConditionalActionString?: string;
  WFControlFlowMode?: number;
  WFCountType?: WFCountType;
  WFDelayTime?: number;
  WFFlashlightSetting?: WFFlashlightSetting;
  WFFormValues?: WFSerialization;
  WFHTTPBodyType?: WFHTTPBodyType;
  WFHTTPHeaders?: WFSerialization;
  WFHTTPMethod?: WFHTTPMethod;
  WFInputType?: WFInputType;
  WFJSONValues?: WFSerialization;
  WFMathOperand?: number;
  WFMathOperation?: WFMathOperation;
  WFNumberActionNumber?: number;
  WFNumberValue?: number;
  WFShowWorkflow?: boolean;
  WFTextActionText?: WFSerialization | string;
  WFURLActionURL?: string;
  WFVariableName?: string;
  WFWorkflowName?: string;
}

export default WFWorkflowActionParameters;
