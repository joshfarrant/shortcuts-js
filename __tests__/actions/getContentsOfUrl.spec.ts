import { getContentsOfUrl } from '../../src/actions';

describe('getContentsOfUrl function', () => {

  it('is a function', () => {
    expect(typeof getContentsOfUrl).toBe('function');
  });

  it('builds a getContentsOfUrl action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.downloadurl',
      WFWorkflowActionParameters: {
        WFJSONValues: {
          Value: {
            WFDictionaryFieldValueItems: [],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        WFHTTPHeaders: {
          Value: {
            WFDictionaryFieldValueItems: [],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        Advanced: false,
        ShowHeaders: false,
        WFHTTPMethod: 'GET',
        WFHTTPBodyType: 'JSON',
      },
    };
    const actual = getContentsOfUrl({});

    expect(actual).toEqual(expected);
  });

  it('builds a getContentsOfUrl action when multiple options are passed', () => {
    const actual = getContentsOfUrl({
      method: 'POST',
      headers: {
        testKey: 'testVal',
        testKey2: 'testVal2',
      },
      requestBodyType: 'JSON',
      requestBody: {
        bodyText: 'Some lovely text',
        bodyNumber: 420,
        bodyBool: false,
        bodyArray: [
          'bodyArrayText',
          678,
        ],
        bodyDict: {
          aNumber: 99,
          someText: 'lol',
        },
      },
    });

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.downloadurl',
      WFWorkflowActionParameters: {
        WFJSONValues: {
          Value: {
            WFDictionaryFieldValueItems: [
              {
                WFKey: {
                  Value: {
                    string: 'bodyText',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 0,
                WFValue: {
                  Value: {
                    string: 'Some lovely text',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
              },
              {
                WFKey: {
                  Value: {
                    string: 'bodyNumber',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 3,
                WFValue: {
                  Value: {
                    string: '420',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
              },
              {
                WFKey: {
                  Value: {
                    string: 'bodyBool',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 4,
                WFValue: {
                  Value: false,
                  WFSerializationType: 'WFNumberSubstitutableState',
                },
              },
              {
                WFKey: {
                  Value: {
                    string: 'bodyArray',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 2,
                WFValue: {
                  Value: [
                    {
                      WFItemType: 0,
                      WFValue: {
                        Value: {
                          string: 'bodyArrayText',
                          attachmentsByRange: {},
                        },
                        WFSerializationType: 'WFTextTokenString',
                      },
                    },
                    {
                      WFItemType: 3,
                      WFValue: {
                        Value: {
                          string: '678',
                          attachmentsByRange: {},
                        },
                        WFSerializationType: 'WFTextTokenString',
                      },
                    },
                  ],
                  WFSerializationType: 'WFArrayParameterState',
                },
              },
              {
                WFKey: {
                  Value: {
                    string: 'bodyDict',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 1,
                WFValue: {
                  Value: {
                    Value: {
                      WFDictionaryFieldValueItems: [
                        {
                          WFKey: {
                            Value: {
                              string: 'aNumber',
                              attachmentsByRange: {},
                            },
                            WFSerializationType: 'WFTextTokenString',
                          },
                          WFItemType: 3,
                          WFValue: {
                            Value: {
                              string: '99',
                              attachmentsByRange: {},
                            },
                            WFSerializationType: 'WFTextTokenString',
                          },
                        },
                        {
                          WFKey: {
                            Value: {
                              string: 'someText',
                              attachmentsByRange: {},
                            },
                            WFSerializationType: 'WFTextTokenString',
                          },
                          WFItemType: 0,
                          WFValue: {
                            Value: {
                              string: 'lol',
                              attachmentsByRange: {},
                            },
                            WFSerializationType: 'WFTextTokenString',
                          },
                        },
                      ],
                    },
                    WFSerializationType: 'WFDictionaryFieldValue',
                  },
                  WFSerializationType: 'WFDictionaryFieldValue',
                },
              },
            ],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        WFHTTPHeaders: {
          Value: {
            WFDictionaryFieldValueItems: [
              {
                WFKey: {
                  Value: {
                    string: 'testKey',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 0,
                WFValue: {
                  Value: {
                    string: 'testVal',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
              },
              {
                WFKey: {
                  Value: {
                    string: 'testKey2',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 0,
                WFValue: {
                  Value: {
                    string: 'testVal2',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
              },
            ],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        Advanced: true,
        ShowHeaders: true,
        WFHTTPMethod: 'POST',
        WFHTTPBodyType: 'JSON',
      },
    };

    expect(actual).toEqual(expected);
  });

  it('builds a getContentsOfUrl action when multiple options are passed as form data', () => {
    const actual = getContentsOfUrl({
      method: 'PUT',
      headers: {
        testKey: 'testVal',
        testKey2: 'testVal2',
      },
      requestBodyType: 'Form',
      requestBody: {
        bodyText: 'Some lovely text',
        bodyNumber: 420,
        bodyBool: false,
        bodyArray: [
          'bodyArrayText',
          678,
        ],
        bodyDict: {
          aNumber: 99,
          someText: 'lol',
        },
      },
    });

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.downloadurl',
      WFWorkflowActionParameters: {
        WFFormValues: {
          Value: {
            WFDictionaryFieldValueItems: [
              {
                WFKey: {
                  Value: {
                    string: 'bodyText',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 0,
                WFValue: {
                  Value: {
                    string: 'Some lovely text',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
              },
              {
                WFKey: {
                  Value: {
                    string: 'bodyNumber',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 3,
                WFValue: {
                  Value: {
                    string: '420',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
              },
              {
                WFKey: {
                  Value: {
                    string: 'bodyBool',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 4,
                WFValue: {
                  Value: false,
                  WFSerializationType: 'WFNumberSubstitutableState',
                },
              },
              {
                WFKey: {
                  Value: {
                    string: 'bodyArray',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 2,
                WFValue: {
                  Value: [
                    {
                      WFItemType: 0,
                      WFValue: {
                        Value: {
                          string: 'bodyArrayText',
                          attachmentsByRange: {},
                        },
                        WFSerializationType: 'WFTextTokenString',
                      },
                    },
                    {
                      WFItemType: 3,
                      WFValue: {
                        Value: {
                          string: '678',
                          attachmentsByRange: {},
                        },
                        WFSerializationType: 'WFTextTokenString',
                      },
                    },
                  ],
                  WFSerializationType: 'WFArrayParameterState',
                },
              },
              {
                WFKey: {
                  Value: {
                    string: 'bodyDict',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 1,
                WFValue: {
                  Value: {
                    Value: {
                      WFDictionaryFieldValueItems: [
                        {
                          WFKey: {
                            Value: {
                              string: 'aNumber',
                              attachmentsByRange: {},
                            },
                            WFSerializationType: 'WFTextTokenString',
                          },
                          WFItemType: 3,
                          WFValue: {
                            Value: {
                              string: '99',
                              attachmentsByRange: {},
                            },
                            WFSerializationType: 'WFTextTokenString',
                          },
                        },
                        {
                          WFKey: {
                            Value: {
                              string: 'someText',
                              attachmentsByRange: {},
                            },
                            WFSerializationType: 'WFTextTokenString',
                          },
                          WFItemType: 0,
                          WFValue: {
                            Value: {
                              string: 'lol',
                              attachmentsByRange: {},
                            },
                            WFSerializationType: 'WFTextTokenString',
                          },
                        },
                      ],
                    },
                    WFSerializationType: 'WFDictionaryFieldValue',
                  },
                  WFSerializationType: 'WFDictionaryFieldValue',
                },
              },
            ],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        WFHTTPHeaders: {
          Value: {
            WFDictionaryFieldValueItems: [
              {
                WFKey: {
                  Value: {
                    string: 'testKey',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 0,
                WFValue: {
                  Value: {
                    string: 'testVal',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
              },
              {
                WFKey: {
                  Value: {
                    string: 'testKey2',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 0,
                WFValue: {
                  Value: {
                    string: 'testVal2',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
              },
            ],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        Advanced: true,
        ShowHeaders: true,
        WFHTTPMethod: 'PUT',
        WFHTTPBodyType: 'Form',
      },
    };

    expect(actual).toEqual(expected);
  });

  it('builds a getContentsOfUrl action when multiple options are passed as form data', () => {
    const actual = getContentsOfUrl({
      method: 'PUT',
      requestBodyType: 'Form',
      requestBody: {
        bodyBool: false,
      },
    });

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.downloadurl',
      WFWorkflowActionParameters: {
        WFFormValues: {
          Value: {
            WFDictionaryFieldValueItems: [
              {
                WFKey: {
                  Value: {
                    string: 'bodyBool',
                    attachmentsByRange: {},
                  },
                  WFSerializationType: 'WFTextTokenString',
                },
                WFItemType: 4,
                WFValue: {
                  Value: false,
                  WFSerializationType: 'WFNumberSubstitutableState',
                },
              },
            ],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        WFHTTPHeaders: {
          Value: {
            WFDictionaryFieldValueItems: [],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        Advanced: true,
        ShowHeaders: false,
        WFHTTPMethod: 'PUT',
        WFHTTPBodyType: 'Form',
      },
    };

    expect(actual).toEqual(expected);
  });

  it('builds a getContentsOfUrl action when just a method is passed', () => {
    const actual = getContentsOfUrl({
      method: 'GET',
    });

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.downloadurl',
      WFWorkflowActionParameters: {
        WFJSONValues: {
          Value: {
            WFDictionaryFieldValueItems: [],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        WFHTTPHeaders: {
          Value: {
            WFDictionaryFieldValueItems: [],
          },
          WFSerializationType: 'WFDictionaryFieldValue',
        },
        Advanced: false,
        ShowHeaders: false,
        WFHTTPMethod: 'GET',
        WFHTTPBodyType: 'JSON',
      },
    };

    expect(actual).toEqual(expected);
  });

});
