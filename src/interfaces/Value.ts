export type Value = string | number | boolean | ValueObject | ValueArray;

export interface ValueObject {
  [x: string]: Value;
}

export interface ValueArray extends Array<Value> {}
