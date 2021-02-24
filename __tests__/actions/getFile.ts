import { getFile } from '../../src/actions';

describe('getFile function', () => {
  it('is a function', () => {
    expect(typeof getFile).toBe('function');
  });

  it('builds a get file action when nothing is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.documentpicker.open',
      WFWorkflowActionParameters: {
        SelectMultiple: false,
        WFFileStorageService: '',
        WFGetFileInitialDirectoryPath: '',
        WFGetFilePath: '',
        WFShowFilePicker: true,
      },
    };
    const actual = getFile({});

    expect(actual).toEqual(expected);
  });

  it('builds a get file action which allows for multiple selections', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.documentpicker.open',
      WFWorkflowActionParameters: {
        SelectMultiple: true,
        WFFileStorageService: '',
        WFGetFileInitialDirectoryPath: '',
        WFGetFilePath: '',
        WFShowFilePicker: true,
      },
    };
    const actual = getFile({ selectMultiple: true });

    expect(actual).toEqual(expected);
  });

  it('builds a get file action with Dropbox as the file storage service provider', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.documentpicker.open',
      WFWorkflowActionParameters: {
        SelectMultiple: false,
        WFFileStorageService: 'Dropbox',
        WFGetFileInitialDirectoryPath: '',
        WFGetFilePath: '',
        WFShowFilePicker: true,
      },
    };
    const actual = getFile({ service: 'Dropbox' });

    expect(actual).toEqual(expected);
  });

  it('builds a get file action with the file already chosen', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.documentpicker.open',
      WFWorkflowActionParameters: {
        SelectMultiple: false,
        WFFileStorageService: '',
        WFGetFileInitialDirectoryPath: '',
        WFGetFilePath: '/path/to/file.txt',
        WFShowFilePicker: true,
      },
    };
    const actual = getFile({ filePath: '/path/to/file.txt' });

    expect(actual).toEqual(expected);
  });

  it('builds a get file action with the initial directory set', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.documentpicker.open',
      WFWorkflowActionParameters: {
        SelectMultiple: false,
        WFFileStorageService: '',
        WFGetFileInitialDirectoryPath: '/path/to',
        WFGetFilePath: '',
        WFShowFilePicker: true,
      },
    };
    const actual = getFile({ initialDirectory: '/path/to' });

    expect(actual).toEqual(expected);
  });

  it('builds a get file action without showing the file picker', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.documentpicker.open',
      WFWorkflowActionParameters: {
        SelectMultiple: false,
        WFFileStorageService: '',
        WFGetFileInitialDirectoryPath: '',
        WFGetFilePath: '',
        WFShowFilePicker: false,
      },
    };
    const actual = getFile({ showFilePicker: false });

    expect(actual).toEqual(expected);
  });
});
