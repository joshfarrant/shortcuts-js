import { chooseFromMenu } from '../../src/actions';

import {
  testActions,
} from '../_fixtures/actions';
import {
  compareObjectsWithGroupingIdentifier,
} from '../_helpers/compareObjectsWithGroupingIdentifier';

import WFWorkflowAction from '../../src/interfaces/WF/WFWorkflowAction';

describe('chooseFromMenu function', () => {

  it('is a function', () => {
    expect(typeof chooseFromMenu).toBe('function');
  });

  it('builds a chooseFromMenu action when no parameters are passed', () => {
    const actual = chooseFromMenu({});

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
        WFWorkflowActionParameters: {
          WFMenuPrompt: '',
          WFMenuItems: [],
          WFControlFlowMode: 0,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a chooseFromMenu action when prompt property is passed', () => {
    const actual = chooseFromMenu({
      prompt: 'Testing...',
    });

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
        WFWorkflowActionParameters: {
          WFMenuPrompt: 'Testing...',
          WFMenuItems: [],
          WFControlFlowMode: 0,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a chooseFromMenu action when items are passed', () => {
    const actual = chooseFromMenu({
      items: [
        {
          label: 'One',
          actions: [
            ...testActions,
          ],
        }, {
          label: 'Two',
          actions: [
            ...testActions,
          ],
        }, {
          label: 'Three',
          actions: [
            ...testActions,
          ],
        },
      ],
    });

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
        WFWorkflowActionParameters: {
          WFMenuPrompt: '',
          WFMenuItems: [
            'One',
            'Two',
            'Three',
          ],
          WFControlFlowMode: 0,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
        WFWorkflowActionParameters: {
          WFMenuItemTitle: 'One',
          WFControlFlowMode: 1,
        },
      },
      ...testActions,
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
        WFWorkflowActionParameters: {
          WFMenuItemTitle: 'Two',
          WFControlFlowMode: 1,
        },
      },
      ...testActions,
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
        WFWorkflowActionParameters: {
          WFMenuItemTitle: 'Three',
          WFControlFlowMode: 1,
        },
      },
      ...testActions,
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.choosefrommenu',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

});
