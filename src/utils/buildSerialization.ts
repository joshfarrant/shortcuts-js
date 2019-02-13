import { getItemType } from './';

import {
  Value,
  ValueArray,
  ValueObject,
} from '../interfaces/Value';
import WFDictionaryFieldValueItem from '../interfaces/WF/WFDictionaryFieldValueItem';
import WFSerialization from '../interfaces/WF/WFSerialization';

/** @ignore */
const valueMap = [{
  // String
  builder: (val: Value, key?: string): WFDictionaryFieldValueItem => {
    const typedVal = val as string;

    const item: WFDictionaryFieldValueItem = {
      WFItemType: getItemType(typedVal),
      WFValue: {
        Value: {
          string: typedVal,
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
  builder: (val: Value, key?: string): WFDictionaryFieldValueItem => {
    const typedVal = val as ValueObject;

    const item: WFDictionaryFieldValueItem = {
      WFItemType: getItemType(typedVal),
      WFValue: {
        Value: buildSerialization(typedVal),
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
  builder: (val: Value, key?: string): WFDictionaryFieldValueItem => {
    const typedVal = val as ValueArray;

    const item: WFDictionaryFieldValueItem = {
      WFItemType: getItemType(typedVal),
      WFValue: {
        Value: typedVal.map((x: Value) => getMatch(x)),
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
  builder: (val: Value, key?: string): WFDictionaryFieldValueItem => {
    const typedVal = val as number;

    const item: WFDictionaryFieldValueItem = {
      WFItemType: getItemType(typedVal),
      WFValue: {
        Value: {
          string: `${typedVal}`,
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
  builder: (val: Value, key?: string): WFDictionaryFieldValueItem => {
    const typedVal = val as boolean;

    const item: WFDictionaryFieldValueItem = {
      WFItemType: getItemType(typedVal),
      WFValue: {
        Value: typedVal,
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
    builder: (val: Value, key?: string) => WFDictionaryFieldValueItem,
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
