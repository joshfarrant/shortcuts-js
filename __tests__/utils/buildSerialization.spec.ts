import {
  buildSerialization,
  getMatch,
} from '../../src/utils/buildSerialization';

describe('buildSerialization function', () => {

  it('is a function', () => {
    expect(typeof buildSerialization).toBe('function');
  });

  it('returns correctly when passed no parameters', () => {
    const actual = buildSerialization();
    const expected = {
      Value: {
        WFDictionaryFieldValueItems: [],
      },
      WFSerializationType: 'WFDictionaryFieldValue',
    };

    expect(actual).toEqual(expected);
  });

  it('returns correctly when passed an empty object', () => {
    const actual = buildSerialization({});
    const expected = {
      Value: {
        WFDictionaryFieldValueItems: [],
      },
      WFSerializationType: 'WFDictionaryFieldValue',
    };

    expect(actual).toEqual(expected);
  });

  it('returns correctly when passed an object with a string property', () => {
    const actual = buildSerialization({
      myString: 'Hello, world!',
    });
    const expected = {
      Value: {
        WFDictionaryFieldValueItems: [{
          WFItemType: 0,
          WFValue: {
            Value: {
              string: 'Hello, world!',
              attachmentsByRange: {},
            },
            WFSerializationType: 'WFTextTokenString',
          },
          WFKey: {
            Value: {
              string: 'myString',
              attachmentsByRange: {},
            },
            WFSerializationType: 'WFTextTokenString',
          },
        }],
      },
      WFSerializationType: 'WFDictionaryFieldValue',
    };

    expect(actual).toEqual(expected);
  });

  it('returns correctly when passed an object with a number property', () => {
    const actual = buildSerialization({
      myNumber: 123,
    });
    const expected = {
      Value: {
        WFDictionaryFieldValueItems: [{
          WFItemType: 3,
          WFValue: {
            Value: {
              string: '123',
              attachmentsByRange: {},
            },
            WFSerializationType: 'WFTextTokenString',
          },
          WFKey: {
            Value: {
              string: 'myNumber',
              attachmentsByRange: {},
            },
            WFSerializationType: 'WFTextTokenString',
          },
        }],
      },
      WFSerializationType: 'WFDictionaryFieldValue',
    };

    expect(actual).toEqual(expected);
  });

  it('returns correctly when passed an object with a boolean property', () => {
    const actual = buildSerialization({
      myBoolean: false,
    });
    const expected = {
      Value: {
        WFDictionaryFieldValueItems: [{
          WFItemType: 4,
          WFValue: {
            Value: false,
            WFSerializationType: 'WFNumberSubstitutableState',
          },
          WFKey: {
            Value: {
              string: 'myBoolean',
              attachmentsByRange: {},
            },
            WFSerializationType: 'WFTextTokenString',
          },
        }],
      },
      WFSerializationType: 'WFDictionaryFieldValue',
    };

    expect(actual).toEqual(expected);
  });

  it('returns correctly when passed an object with an array property', () => {
    const actual = buildSerialization({
      myArray: [
        'test',
        123,
      ],
    });
    const expected = {
      Value: {
        WFDictionaryFieldValueItems: [{
          WFItemType: 2,
          WFValue: {
            Value: [{
              WFItemType: 0,
              WFValue: {
                Value: {
                  string: 'test',
                  attachmentsByRange: {},
                },
                WFSerializationType: 'WFTextTokenString',
              },
            }, {
              WFItemType: 3,
              WFValue: {
                Value: {
                  string: '123',
                  attachmentsByRange: {},
                },
                WFSerializationType: 'WFTextTokenString',
              },
            }],
            WFSerializationType: 'WFArrayParameterState',
          },
          WFKey: {
            Value: {
              string: 'myArray',
              attachmentsByRange: {},
            },
            WFSerializationType: 'WFTextTokenString',
          },
        }],
      },
      WFSerializationType: 'WFDictionaryFieldValue',
    };

    expect(actual).toEqual(expected);
  });

  it('returns correctly when passed an object with an object property', () => {
    const actual = buildSerialization({
      myObject: {
        myBoolean: true,
        myString: 'testing',
      },
    });
    const expected = {
      Value: {
        WFDictionaryFieldValueItems: [{
          WFItemType: 1,
          WFValue: {
            Value: {
              Value: {
                WFDictionaryFieldValueItems: [{
                  WFItemType: 4,
                  WFValue: {
                    Value: true,
                    WFSerializationType: 'WFNumberSubstitutableState',
                  },
                  WFKey: {
                    Value: {
                      string: 'myBoolean',
                      attachmentsByRange: {},
                    },
                    WFSerializationType: 'WFTextTokenString',
                  },
                }, {
                  WFItemType: 0,
                  WFValue: {
                    Value: {
                      string: 'testing',
                      attachmentsByRange: {},
                    },
                    WFSerializationType: 'WFTextTokenString',
                  },
                  WFKey: {
                    Value: {
                      string: 'myString',
                      attachmentsByRange: {},
                    },
                    WFSerializationType: 'WFTextTokenString',
                  },
                }],
              },
              WFSerializationType: 'WFDictionaryFieldValue',
            },
            WFSerializationType: 'WFDictionaryFieldValue',
          },
          WFKey: {
            Value: {
              string: 'myObject',
              attachmentsByRange: {},
            },
            WFSerializationType: 'WFTextTokenString',
          },
        }],
      },
      WFSerializationType: 'WFDictionaryFieldValue',
    };

    expect(actual).toEqual(expected);
  });
});

describe('getMatch function', () => {

  it('is a function', () => {
    expect(typeof buildSerialization).toBe('function');
  });

  it('throws an error when passed an invalid type', () => {
    // tslint:disable-next-line no-any
    const actual = () => getMatch(null as any);

    expect(actual).toThrow('Invalid value');
  });

  it('returns correctly when passed a string', () => {
    const actual = getMatch('abc');
    const expected = {
      WFItemType: 0,
      WFValue: {
        Value: {
          string: 'abc',
          attachmentsByRange: {},
        },
        WFSerializationType: 'WFTextTokenString',
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns correctly when passed a number', () => {
    const actual = getMatch(42);
    const expected = {
      WFItemType: 3,
      WFValue: {
        Value: {
          string: '42',
          attachmentsByRange: {},
        },
        WFSerializationType: 'WFTextTokenString',
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns correctly when passed a boolean', () => {
    const actual = getMatch(true);
    const expected = {
      WFItemType: 4,
      WFValue: {
        Value: true,
        WFSerializationType: 'WFNumberSubstitutableState',
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns correctly when passed an array', () => {
    const actual = getMatch([]);
    const expected = {
      WFItemType: 2,
      WFValue: {
        Value: [],
        WFSerializationType: 'WFArrayParameterState',
      },
    };

    expect(actual).toEqual(expected);
  });

  it('returns correctly when passed an object', () => {
    const actual = getMatch({});
    const expected = {
      WFItemType: 1,
      WFValue: {
        Value: {
          Value: {
            WFDictionaryFieldValueItems: [],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        WFSerializationType: 'WFDictionaryFieldValue',
      },
    };

    expect(actual).toEqual(expected);
  });

});
