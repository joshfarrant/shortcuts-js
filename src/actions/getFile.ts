import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';
import { withActionOutput } from '../utils';

/**
 * @action Get File
 * @section Content Types > Documents > File Storage
 * @icon Documents
 *
 * This action lets you choose a file
 *
 * ```js
 * // Choose a file
 * getFile({
 *   filePath = 'path/to/file.ext',
 *   initialDirectory = '/shortcuts',
 *   selectMultiple = false,
 *   service = 'iCloud Drive',
 *   showFilePicker = false,
 * });
 * ```
 */

const getFile = (
  {
    filePath = '',
    initialDirectory = '',
    selectMultiple = false,
    service = '',
    showFilePicker = true,
  }: {
    /** The path to the file if `showFilePicker` is set to false */
    filePath?: string,

    /** Set the initial directory of the file storage service provider */
    initialDirectory?: string,

    /** Allows for multiple file selections if `showFilePicker` is set to true */
    selectMultiple?: boolean,

    /** The file storage service provider. Defaults to 'iCloud Drive' */
    service?: string,

    /** Allows the user to choose a file if set to true */
    showFilePicker?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.documentpicker.open',
  WFWorkflowActionParameters: {
    SelectMultiple: selectMultiple,
    WFFileStorageService: service,
    WFGetFileInitialDirectoryPath: initialDirectory,
    WFGetFilePath: filePath,
    WFShowFilePicker: showFilePicker,
  },
});

export default withActionOutput(getFile);
