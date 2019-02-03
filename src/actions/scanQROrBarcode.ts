import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Scan QR/BarCode
 * @section Content Types > Text >
 * @icon QRCode
 *
 * Scans a QR code or bar code using the camera, and returns the text/URL that is found.
 *
 * ```js
 * scanQROrBarcode();
 * ```
 */

const scanQROrBarcode = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.scanbarcode',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(scanQROrBarcode);
