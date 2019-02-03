import WFWorkflowAction from '../../src/interfaces/WF/WFWorkflowAction';

export const compareObjectsWithGroupingIdentifier = (
  actual: WFWorkflowAction | WFWorkflowAction[],
  expected: WFWorkflowAction[],
) => {
  const actualArr = Array.isArray(actual) ? actual : [actual];

  expect.assertions(expected.length);

  expected.forEach((obj, idx) => {
    const actualObj = actualArr[idx];
    const expectedObj = {
      ...obj,
    };

    const { GroupingIdentifier } = actualObj.WFWorkflowActionParameters;
    if (GroupingIdentifier) {
      expectedObj.WFWorkflowActionParameters.GroupingIdentifier = GroupingIdentifier;
    }

    expect(actualArr[idx]).toEqual(expectedObj);
  });
};
