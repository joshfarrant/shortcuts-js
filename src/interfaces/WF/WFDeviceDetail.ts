import WFSerialization from './WFSerialization';

type WFDeviceDetail = (
  'Device Name'
  | 'Device Model'
  | 'System Version'
  | 'Screen Width'
  | 'Screen Height'
  | 'Current Volume'
  | 'Current Brightness'
  | WFSerialization
);

export default WFDeviceDetail;
