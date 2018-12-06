import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Scan QR/Barcode Action. Scans a QR code or barcode using the camera, and returns the text/URL that is found.
 *
 * ```js
 * scanBarcode();
 * ```
 */

const scanBarcode = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.scanbarcode',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(scanBarcode);
