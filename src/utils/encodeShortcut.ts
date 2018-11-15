import WFWorkflow from '../interfaces/WF/WFWorkflow';

const createBplist: (obj: {}) => string = require('bplist-creator');

export const encodeShortcut = (
  data: WFWorkflow,
): string => (
  createBplist(data)
);
