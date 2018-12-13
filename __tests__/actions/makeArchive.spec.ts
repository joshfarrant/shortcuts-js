import { makeArchive } from '../../src/actions';

describe('makeArchive function', () => {

  it('is a function', () => {
    expect(typeof makeArchive).toBe('function');
  });

  it('builds a makeArchive action with no name passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.makezip',
      WFWorkflowActionParameters: {
        WFArchiveFormat: '.zip',
        WFZIPName: '',
      },
    };
    const actual = makeArchive({});

    expect(actual).toEqual(expected);
  });

  it('builds a makeArchive action with a name and format provided', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.makezip',
      WFWorkflowActionParameters: {
        WFArchiveFormat: '.tar',
        WFZIPName: 'tarName',
      },
    };
    const actual = makeArchive({
      format: '.tar',
      name: 'tarName',
    });

    expect(actual).toEqual(expected);
  });

});
