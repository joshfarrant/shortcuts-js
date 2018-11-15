import WFWorkflowAction from './WFWorkflowAction';
import WFWorkflowIcon from './WFWorkflowIcon';
import WFWorkflowImportQuestion from './WFWorkflowImportQuestion';
import WFWorkflowInputContentItemClass from './WFWorkflowInputContentItemClass';
import WFWorkflowType from './WFWorkflowType';

interface WFWorkflow {
  WFWorkflowClientVersion: string;
  WFWorkflowClientRelease: string;
  WFWorkflowIcon: WFWorkflowIcon;
  WFWorkflowImportQuestions: WFWorkflowImportQuestion[];
  WFWorkflowTypes: WFWorkflowType[];
  WFWorkflowInputContentItemClasses: WFWorkflowInputContentItemClass[];
  WFWorkflowActions: WFWorkflowAction[];
}

export default WFWorkflow;
