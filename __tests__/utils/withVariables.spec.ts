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

  it('returns an attachment object when passed a single variable', () => {
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

  it('returns an attachment object when passed a variable in the middle of a string', () => {
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

  it('returns an attachment object when passed multiple variables in a string', () => {
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

});
