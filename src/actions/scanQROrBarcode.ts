/** @module actions */

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Scan QR/Barcode Action. Scans a QR code or barcode using the camera, and returns the text/URL that is found.
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
