import WFWorkflow from '../interfaces/WF/WFWorkflow';

/** @ignore */
const createBplist: (obj: {}) => string = require('bplist-creator');

/** @ignore */
export const encodeShortcut = (
  data: WFWorkflow,
): string => (
  createBplist(data)
);
