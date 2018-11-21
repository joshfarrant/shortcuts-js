import { withVariables } from '../../src/utils';

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
    const uuid = 'b74c81a8-192a-463f-a0a6-2d327963714f';

    const actual = withVariables`${uuid}`;
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

  it('returns an attachment object when passed a magic variable in the middle of a string', () => {
    const uuid = 'b74c81a8-192a-463f-a0a6-2d327963714f';

    const actual = withVariables`Hello, ${uuid} world!`;
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
    const name = 'Test Variable';

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
    const name = 'Test Variable';

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
    const uuid1 = 'b74c81a8-192a-463f-a0a6-2d327963714f';
    const uuid2 = '4e8b6858-cf85-4ffe-9019-efb421248510';
    const uuid3 = 'af9c2e97-8af2-4029-8664-18fb158dbd16';
    const uuid4 = '10407a89-ef91-4eb0-a3ac-2ea62a8c25b6';

    const actual = withVariables`${uuid1} Going ${uuid2}${uuid3} to the ${uuid4} blacksmith`;
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
    const name1 = 'Test Variable1';
    const name2 = 'Test Variable2';
    const name3 = 'Test Variable3';
    const name4 = 'Test Variable4';

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

  it(
    'returns an attachment object when passed a named variable and a magic variable in a string',
    () => {
      const uuid = 'b74c81a8-192a-463f-a0a6-2d327963714f';
      const name = 'Test Variable';

      const actual = withVariables`${uuid} Going ${name} to the blacksmith`;
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
    },
  );
});
