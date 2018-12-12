import { scanQROrBarcode } from '../../src/actions';

describe('scanQROrBarcode function', () => {
  it('is a function', () => {
    expect(typeof scanQROrBarcode).toBe('function');
  });

  it('builds a scan qr/barcode action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.scanbarcode',
      WFWorkflowActionParameters: {},
    };
    const actual = scanQROrBarcode({});

    expect(actual).toEqual(expected);
  });
});
