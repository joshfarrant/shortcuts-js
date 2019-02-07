export interface Script {
  metadata: {
    glyph?: number;
    color?: number;
  };
  // variables: {
  //   name: string; // the variable name in the built .js file
  //   variableName: string;
  // }[];
  // actionOutputs: {
  //   name: string; // the variable name in the built .js file
  //   outputName?: string;
  // }[];
  actions: {
    name: string;
    options?: {};
  }[];
  // a list to keep track of all the functions to be imported from the npm module
  imports: { [submodule: string]: string[] };
}
