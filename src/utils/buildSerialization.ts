import { getItemType } from './';

import WFDictionaryFieldValueItem from '../interfaces/WF/WFDictionaryFieldValueItem';
import WFSerialization from '../interfaces/WF/WFSerialization';

type Value = string | number | boolean | ValueObject | ValueArray;

interface ValueObject {
  [x: string]: Value;
}

interface ValueArray extends Array<Value> {}

/** @ignore */
const valueMap = [{
  // String
  builder: (val: string, key?: string): WFDictionaryFieldValueItem => {
    const item: WFDictionaryFieldValueItem = {
      WFItemType: getItemType(val),
      WFValue: {
        Value: {
          string: val,
          attachmentsByRange: {},
        },
        WFSerializationType: 'WFTextTokenString',
      },
    };

    if (key) {
      item.WFKey = {
        Value: {
          string: key,
          attachmentsByRange: {},
        },
        WFSerializationType: 'WFTextTokenString',
      };
    }

    return item;
  },
  validator: (item: Value): boolean => (
    typeof item === typeof ''
  ),
}, {
  // Object
  builder: (val: ValueObject, key?: string): WFDictionaryFieldValueItem => {
    const item: WFDictionaryFieldValueItem = {
      WFItemType: getItemType(val),
      WFValue: {
        Value: buildSerialization(val),
        WFSerializationType: 'WFDictionaryFieldValue',
      },
    };

    if (key) {
      item.WFKey = {
        Value: {
          string: key,
          attachmentsByRange: {},
        },
        WFSerializationType: 'WFTextTokenString',
      };
    }

    return item;
  },
  validator: (item: Value): boolean => (
    !Array.isArray(item) && Object(item) === item
  ),
}, {
  // Array
  builder: (val: ValueArray, key?: string): WFDictionaryFieldValueItem => {
    const item: WFDictionaryFieldValueItem = {
      WFItemType: getItemType(val),
      WFValue: {
        Value: val.map((x: Value) => getMatch(x)),
        WFSerializationType: 'WFArrayParameterState',
      },
    };

    if (key) {
      item.WFKey = {
        Value: {
          string: key,
          attachmentsByRange: {},
        },
        WFSerializationType: 'WFTextTokenString',
      };
    }

    return item;
  },
  validator: (item: Value): boolean => (
    Array.isArray(item)
  ),
}, {
  // Number
  builder: (val: number, key?: string): WFDictionaryFieldValueItem => {
    const item: WFDictionaryFieldValueItem = {
      WFItemType: getItemType(val),
      WFValue: {
        Value: {
          string: `${val}`,
          attachmentsByRange: {},
        },
        WFSerializationType: 'WFTextTokenString',
      },
    };

    if (key) {
      item.WFKey = {
        Value: {
          string: key,
          attachmentsByRange: {},
        },
        WFSerializationType: 'WFTextTokenString',
      };
    }

    return item;
  },
  validator: (item: Value): boolean => (
    typeof item === typeof 0
  ),
}, {
  // Boolean
  builder: (val: boolean, key?: string): WFDictionaryFieldValueItem => {
    const item: WFDictionaryFieldValueItem = {
      WFItemType: getItemType(val),
      WFValue: {
        Value: val,
        WFSerializationType: 'WFNumberSubstitutableState',
      },
    };

    if (key) {
      item.WFKey = {
        Value: {
          string: key,
          attachmentsByRange: {},
        },
        WFSerializationType: 'WFTextTokenString',
      };
    }

    return item;
  },
  validator: (item: Value): boolean => (
    typeof item === typeof true
  ),
}];

/** @ignore */
export const getMatch = (
  val: Value,
  key?: string,
): WFDictionaryFieldValueItem => {
  // Find the validator that returns true for this item
  const match = valueMap.find(({ validator }) => (
    validator(val)
  ));

  if (!match) {
    throw new Error('Invalid value');
  }

  const {
    builder,
  }: {
    // TODO Figure out how to avoid any here
    // tslint:disable-next-line no-any
    builder: (val: any, key?: string) => WFDictionaryFieldValueItem,
  } = match;

  return builder(val, key);
};

/** @ignore */
export const buildSerialization = (
  data: ValueObject = {},
): WFSerialization => ({
  Value: {
    WFDictionaryFieldValueItems: Object.entries(data).map(([key, val]) => (
      getMatch(val, key)
    )),
  },
  WFSerializationType: 'WFDictionaryFieldValue',
});
