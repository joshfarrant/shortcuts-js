import { conditional } from '../../src/actions';

import {
  testActions,
} from '../_fixtures/actions';
import {
  compareObjectsWithGroupingIdentifier,
} from '../_helpers/compareObjectsWithGroupingIdentifier';

import WFWorkflowAction from '../../src/interfaces/WF/WFWorkflowAction';

describe('conditional function', () => {

  it('is a function', () => {
    expect(typeof conditional).toBe('function');
  });

  it('builds a if action when no parameters are passed', () => {
    const actual = conditional({});

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFConditionalActionString: 'example',
          WFControlFlowMode: 0,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a conditional action when ifTrue property is passed', () => {
    const actual = conditional({
      ifTrue: [
        ...testActions,
      ],
    });

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFConditionalActionString: 'example',
          WFControlFlowMode: 0,
        },
      },
      ...testActions,
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a conditional action when ifFalse property is passed', () => {
    const actual = conditional({
      ifFalse: [
        ...testActions,
      ],
    });

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFConditionalActionString: 'example',
          WFControlFlowMode: 0,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 1,
        },
      },
      ...testActions,
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a conditional action when ifTrue and ifFalse properties are passed', () => {
    const actual = conditional({
      ifTrue: [
        ...testActions,
      ],
      ifFalse: [
        ...testActions,
      ],
    });

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFConditionalActionString: 'example',
          WFControlFlowMode: 0,
        },
      },
      ...testActions,
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 1,
        },
      },
      ...testActions,
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a conditional action when no input property is passed', () => {
    const actual = conditional({
      value: 'hello',
    });

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 0,
          WFConditionalActionString: 'hello',
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a conditional action when a built-in input property is passed', () => {
    const actual = conditional({
      input: 'Is Greater Than',
      value: 22,
    });
    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 0,
          WFCondition: 'Is Greater Than',
          WFNumberValue: 22,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a conditional action when \'<\' input property is passed', () => {
    const actual = conditional({
      input: '<',
      value: 7,
    });

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 0,
          WFCondition: 'Is Less Than',
          WFNumberValue: 7,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

  it('builds a conditional action when \'=\' input property is passed', () => {
    const actual = conditional({
      input: '=',
      value: 12,
    });

    const expected: WFWorkflowAction[] = [
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 0,
          WFCondition: 'Equals',
          WFNumberValue: 12,
        },
      },
      {
        WFWorkflowActionIdentifier: 'is.workflow.actions.conditional',
        WFWorkflowActionParameters: {
          WFControlFlowMode: 2,
        },
      },
    ];

    compareObjectsWithGroupingIdentifier(actual, expected);
  });

});
