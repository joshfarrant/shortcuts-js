import WFWorkflow from '../interfaces/WF/WFWorkflow';

const { parseFile } = require('bplist-parser');

const parseBplist = async (file: string): Promise<WFWorkflow> => (
  new Promise((resolve, reject) => {
    parseFile(file, (err: Error, parsed: WFWorkflow[]) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(parsed[0]);
    });
  })
);

/** @ignore */
export const decodeShortcut = async (
  file: string,
): Promise<WFWorkflow> => (
  parseBplist(file)
);
