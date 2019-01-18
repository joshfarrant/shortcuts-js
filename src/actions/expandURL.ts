import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Expand URL Action. This action expands and cleans up URLs that have been shortend using a URL shortening service like TinyURL or Bit.ly.
 *
 * ```js
 * expandURL();
 * ```
 *
 * @action Expand URL
 * @section Content Types/Web/URLs
 */

const expandURL = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.url.expand',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(expandURL);

export const icon = 84;
