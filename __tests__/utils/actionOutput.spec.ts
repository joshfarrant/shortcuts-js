import Attachment from '../../src/interfaces/WF/Attachment';
import { actionOutput } from '../../src/utils';

describe('actionOutput function', () => {

  it('is a function', () => {
    expect(typeof actionOutput).toBe('function');
  });

  it('returns an ActionOutput attachment object when passed nothing', () => {
    const uuid = '70a08121-f08d-46e4-a41f-102912750b11';

    const actual = actionOutput();
    actual.OutputUUID = uuid;

    const expected: Attachment = {
      OutputUUID: uuid,
      Type: 'ActionOutput',
    };

    expect(actual).toEqual(expected);
  });

  it('returns a custom named ActionOutput attachment object when passed a string', () => {
    const uuid = 'dd05b2e3-6069-4c4a-900a-79ae837795d6';

    const actual = actionOutput('My Result');
    actual.OutputUUID = uuid;

    const expected: Attachment = {
      OutputName: 'My Result',
      OutputUUID: uuid,
      Type: 'ActionOutput',
    };

    expect(actual).toEqual(expected);
  });

});
