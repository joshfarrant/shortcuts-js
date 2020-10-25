const fs = require('fs').promises;
const util = require('util');

const bplist = require('bplist-parser');
const plist = require('plist');
const commandLineArgs = require('command-line-args')
const inquirer = require('inquirer');

const parseBplist = bplist.parseBuffer;

const BPLIST_HEADER = 'bplist';

const optionDefinitions = [
  {
    name: 'file',
    alias: 'f',
    type: String,
    defaultOption: true,
  },
];

const run = async () => {

  let { file } = commandLineArgs(optionDefinitions)

  if (!file) {
    const files = await fs.readdir('./shortcuts');

    const {
      fileName,
    } = await inquirer.prompt([
      {
        type: 'list',
        name: 'fileName',
        message: 'Choose a Shortcut',
        choices: files.filter(x => x.includes('.shortcut'))
      }
    ]);

    file = `./shortcuts/${fileName}`;
  }

  let shortcut;
  const buffer = await fs.readFile(file);
  const header = buffer.slice(0, BPLIST_HEADER.length);
  if (BPLIST_HEADER === header.toString('utf-8')) {
    const data = parseBplist(buffer);
    // If data is an array, use the first element
    shortcut = Array.isArray(data) ? data[0] : data;
  } else {
    shortcut = plist.parse(buffer.toString('utf-8'));
  }

  const actions = shortcut.WFWorkflowActions;

  while (true) {
    const {
      action,
    } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action',
        choices: [
          {
            name: '*: All',
            value: actions,
            short: 'All',
          },
          ...actions.map((x, i) => ({
            name: `${i}: ${x.WFWorkflowActionIdentifier}`,
            value: x,
            short: x.WFWorkflowActionIdentifier,
          }))
        ],
      }
    ]);

    const json = JSON.stringify(action, null, 2);
    console.log(`\n${json}\n`);
  }

};

run();
