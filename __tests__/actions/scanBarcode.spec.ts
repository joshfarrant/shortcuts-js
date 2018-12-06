import { scanBarcode } from '../../src/actions';

describe('scanBarcode function', () => {
  it('is a function', () => {
    expect(typeof scanBarcode).toBe('function');
  });

  it('builds a scan qr/barcode action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.scanbarcode',
      WFWorkflowActionParameters: {},
    };
    const actual = scanBarcode();

    expect(actual).toEqual(expected);
  });
});
