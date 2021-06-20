import { addToDo } from '../../src/actions';

const id = 'com.culturedcode.ThingsiPhone.TINAddTodoIntent';

describe('addToDo function', () => {

  it('is a function', () => {
    expect(typeof addToDo).toBe('function');
  });

  it('builds an addToDo action when no options are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: id,
      WFWorkflowActionParameters: {},
    };
    const actual = addToDo({});

    expect(actual).toEqual(expected);
  });

  it('builds an addToDo action with evening option given', () => {
    const evening = true;
    const expected = {
      WFWorkflowActionIdentifier: id,
      WFWorkflowActionParameters: {
        WFEvening: evening,
      },
    };
    const actual = addToDo({ evening });

    expect(actual).toEqual(expected);
  });

});
