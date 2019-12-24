import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Add To-Do
 * @section Content Types > Apps > Things > Add To-Do
 * @icon Things
 *
 * Adds a new to-do to Things.
 *
 * ```js
 * addToDo();
 * ```
 */

const cleanObject = (obj: {[key: string]: unknown}) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
  return obj;
};

const addToDo = ({
  evening = undefined,
  editInThings = undefined,
}: {
  evening?: boolean,
  editInThings?: boolean,
}): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'com.culturedcode.ThingsiPhone.TINAddTodoIntent',
  WFWorkflowActionParameters: cleanObject({
    WFEvening: evening,
    WFEditInThings: editInThings,
  }),
});

export default addToDo;
