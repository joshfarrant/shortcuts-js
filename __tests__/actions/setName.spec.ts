import { setName } from '../../src/actions';

describe('setName function', () => {

  it('is a function', () => {
    expect(typeof setName).toBe('function');
  });

  it('builds a setName action when a name is passed', () => {
    const name = 'Some name';
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setitemname',
      WFWorkflowActionParameters: {
        WFName: name,
        WFDontIncludeFileExtension: false,
        Advanced: false,
      },
    };
    const actual = setName({
      name,
    });

    expect(actual).toEqual(expected);
  });

  it('builds a setName action when name and dontIncludeFileExtension are passed', () => {
    const name = 'Some name';
    const dontIncludeFileExtension = true;
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.setitemname',
      WFWorkflowActionParameters: {
        WFName: name,
        WFDontIncludeFileExtension: dontIncludeFileExtension,
        Advanced: true,
      },
    };
    const actual = setName({
      name,
      dontIncludeFileExtension,
    });

    expect(actual).toEqual(expected);
  });

});
