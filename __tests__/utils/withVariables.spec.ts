import { withVariables } from '../../src/utils';
import {
  actionOutput,
  askWhenRun,
  clipboard,
  currentDate,
  shortcutInput,
  variable,
} from '../../src/utils/variables';

import WFSerialization from '../../src/interfaces/WF/WFSerialization';

describe('withVariables function', () => {
  it('is a function', () => {
    expect(typeof withVariables).toBe('function');
  });

  it('returns an attachment object when passed an empty string', () => {
    const actual = withVariables``;
    const expected: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: '',
        attachmentsByRange: {},
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns an attachment object when passed a single magic variable', () => {
    const magic = actionOutput();
    magic.OutputUUID = 'b74c81a8-192a-463f-a0a6-2d327963714f';

    const actual = withVariables`${magic}`;
    const expected: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: '￼', // Object replacement character
        attachmentsByRange: {
          '{0, 1}': {
            OutputUUID: 'b74c81a8-192a-463f-a0a6-2d327963714f',
            Type: 'ActionOutput',
          },
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns an attachment object when passed a single custom named magic variable', () => {
    const magic = actionOutput('My Custom Output');
    magic.OutputUUID = 'b74c81a8-192a-463f-a0a6-2d327963714f';

    const actual = withVariables`${magic}`;
    const expected: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: '￼', // Object replacement character
        attachmentsByRange: {
          '{0, 1}': {
            OutputUUID: 'b74c81a8-192a-463f-a0a6-2d327963714f',
            OutputName: 'My Custom Output',
            Type: 'ActionOutput',
          },
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns an attachment object when passed a magic variable in the middle of a string', () => {
    const magic = actionOutput();
    magic.OutputUUID = 'b74c81a8-192a-463f-a0a6-2d327963714f';

    const actual = withVariables`Hello, ${magic} world!`;
    const expected: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: 'Hello, ￼ world!', // Contains object replacement character
        attachmentsByRange: {
          '{7, 1}': {
            OutputUUID: 'b74c81a8-192a-463f-a0a6-2d327963714f',
            Type: 'ActionOutput',
          },
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns an attachment object when passed a single named variable', () => {
    const name = variable('Test Variable');

    const actual = withVariables`${name}`;
    const expected: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: '￼', // Object replacement character
        attachmentsByRange: {
          '{0, 1}': {
            Type: 'Variable',
            VariableName: 'Test Variable',
          },
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns an attachment object when passed a named variable in the middle of a string', () => {
    const name = variable('Test Variable');

    const actual = withVariables`Hello, ${name} world!`;
    const expected: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: 'Hello, ￼ world!', // Contains object replacement character
        attachmentsByRange: {
          '{7, 1}': {
            Type: 'Variable',
            VariableName: 'Test Variable',
          },
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns an attachment object when passed multiple magic variables in a string', () => {
    const magic1 = actionOutput();
    magic1.OutputUUID = 'b74c81a8-192a-463f-a0a6-2d327963714f';
    const magic2 = actionOutput();
    magic2.OutputUUID = '4e8b6858-cf85-4ffe-9019-efb421248510';
    const magic3 = actionOutput();
    magic3.OutputUUID = 'af9c2e97-8af2-4029-8664-18fb158dbd16';
    const magic4 = actionOutput();
    magic4.OutputUUID = '10407a89-ef91-4eb0-a3ac-2ea62a8c25b6';

    const actual = withVariables`${magic1} Going ${magic2}${magic3} to the ${magic4} blacksmith`;
    const expected: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: '￼ Going ￼￼ to the ￼ blacksmith', // Contains object replacement character
        attachmentsByRange: {
          '{0, 1}': {
            OutputUUID: 'b74c81a8-192a-463f-a0a6-2d327963714f',
            Type: 'ActionOutput',
          },
          '{8, 1}': {
            OutputUUID: '4e8b6858-cf85-4ffe-9019-efb421248510',
            Type: 'ActionOutput',
          },
          '{9, 1}': {
            OutputUUID: 'af9c2e97-8af2-4029-8664-18fb158dbd16',
            Type: 'ActionOutput',
          },
          '{18, 1}': {
            OutputUUID: '10407a89-ef91-4eb0-a3ac-2ea62a8c25b6',
            Type: 'ActionOutput',
          },
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns an attachment object when passed multiple named variables in a string', () => {
    const name1 = variable('Test Variable1');
    const name2 = variable('Test Variable2');
    const name3 = variable('Test Variable3');
    const name4 = variable('Test Variable4');

    const actual = withVariables`${name1} Going ${name2}${name3} to the ${name4} blacksmith`;
    const expected: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: '￼ Going ￼￼ to the ￼ blacksmith', // Contains object replacement character
        attachmentsByRange: {
          '{0, 1}': {
            Type: 'Variable',
            VariableName: 'Test Variable1',
          },
          '{8, 1}': {
            Type: 'Variable',
            VariableName: 'Test Variable2',
          },
          '{9, 1}': {
            Type: 'Variable',
            VariableName: 'Test Variable3',
          },
          '{18, 1}': {
            Type: 'Variable',
            VariableName: 'Test Variable4',
          },
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns an attachment object when passed a named and magic variables in a string', () => {
    const magic = actionOutput();
    magic.OutputUUID = 'b74c81a8-192a-463f-a0a6-2d327963714f';
    const name = variable('Test Variable');

    const actual = withVariables`${magic} Going ${name} to the blacksmith`;
    const expected: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: '￼ Going ￼ to the blacksmith', // Contains object replacement character
        attachmentsByRange: {
          '{0, 1}': {
            OutputUUID: 'b74c81a8-192a-463f-a0a6-2d327963714f',
            Type: 'ActionOutput',
          },
          '{8, 1}': {
            Type: 'Variable',
            VariableName: 'Test Variable',
          },
        },
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns an attachment object when passed multiple global variables in a string', () => {
    const actual = withVariables`${askWhenRun}, ${clipboard}, ${currentDate} and ${shortcutInput}.`;

    const expected: WFSerialization = {
      WFSerializationType: 'WFTextTokenString',
      Value: {
        string: '￼, ￼, ￼ and ￼.', // Contains object replacement character
        attachmentsByRange: {
          '{0, 1}': { Type: 'Ask' },
          '{3, 1}': { Type: 'Clipboard' },
          '{6, 1}': { Type: 'CurrentDate' },
          '{12, 1}': { Type: 'ExtensionInput' },
        },
      },
    };

    expect(actual).toEqual(expected);
  });
});
