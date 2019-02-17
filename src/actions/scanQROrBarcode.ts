import { withActionOutput } from '../utils/withActionOutput';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

const identifier = 'is.workflow.actions.scanbarcode';

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
  WFWorkflowActionIdentifier: identifier,
  WFWorkflowActionParameters: {},
});

const invert = () => ({});

scanQROrBarcode.identifier = identifier;
scanQROrBarcode.invert = invert;

export default withActionOutput(scanQROrBarcode);
