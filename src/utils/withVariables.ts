import { testUUID } from '.';
import WFSerialization from '../interfaces/WF/WFSerialization';

/** @ignore */
export const withVariables = (
  strings: TemplateStringsArray,
  ...vars: string[]
): WFSerialization => ({
  WFSerializationType: 'WFTextTokenString',
  Value: {
    string: strings.join('\ufffc'), // Join strings with object replacement character
    attachmentsByRange: strings.reduce(
      (a, _, i, s) => {
        // If we've got no vars for this string, skip
        if (!vars[i]) return a;

        // Calculate the length of the string so far, including the replacement character
        const lengthSoFar = s.reduce(
          (a2, c2, i2) => (
            (i2 <= i) ? (a2 + c2.length + 1) : a2
          ),
          -1,
        );

        return {
          ...a,
          [`{${lengthSoFar}, 1}`]: (
            testUUID(vars[i]) ? {
              // Magic Variable
              OutputUUID: vars[i],
              Type: 'ActionOutput',
            } : {
              // Named Variable
              VariableName: vars[i],
              Type: 'Variable',
            }
          ),
        };
      },
      {},
    ),
  },
});
