import WFItemType from '../interfaces/WF/WFItemType';

type itemType = (
  string
  | number
  | []
  | {}
);

const itemTypeMap = [{
  itemType: 0 as WFItemType, // String
  validator: (item: itemType): boolean => (
    typeof item === typeof ''
  ),
}, {
  itemType: 1 as WFItemType, // Object
  validator: (item: itemType): boolean => (
    !Array.isArray(item) && Object(item) === item
  ),
}, {
  itemType: 2 as WFItemType, // Array
  validator: (item: itemType): boolean => (
    Array.isArray(item)
  ),
}, {
  itemType: 3 as WFItemType, // Number
  validator: (item: itemType): boolean => (
    typeof item === typeof 0
  ),
}, {
  itemType: 4 as WFItemType, // Boolean
  validator: (item: itemType): boolean => (
    typeof item === typeof true
  ),
}];

export const getItemType = (
  item: itemType,
): WFItemType => {
  // Find the validator that returns true for this item
  const match = itemTypeMap.find(({ validator }) => (
    validator(item)
  ));

  if (!match) {
    throw new Error('Invalid itemType');
  }

  return match.itemType;
};
