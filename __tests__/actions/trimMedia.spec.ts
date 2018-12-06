import { trimMedia } from '../../src/actions';

describe('trimMedia function', () => {
  it('is a function', () => {
    expect(typeof trimMedia).toBe('function');
  });

  it('builds a get last import action', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.trimvideo',
      WFWorkflowActionParameters: {},
    };
    const actual = trimMedia();

    expect(actual).toEqual(expected);
  });
});
