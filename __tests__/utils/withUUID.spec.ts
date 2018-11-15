import { withUUID } from '../../src/utils';

import { number } from '../../src/actions';

describe('withUUID function', () => {

  it('is a function', () => {
    expect(typeof withUUID).toBe('function');
  });

  it('returns a function', () => {
    expect(typeof withUUID(number)).toBe('function');
  });

  it('adds a callback with returns the added uuid', () => {
    // https://gist.github.com/johnelliott/cf77003f72f889abbc3f32785fa3df8d
    const v4 = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

    let id;
    withUUID(number)({ number: 42 }, (uuid) => {
      id = uuid;
    });

    expect(id).toMatch(v4);
  });

  it('adds a UUID to the generated action', () => {
    let id;
    const actual = withUUID(number)({ number: 42 }, (uuid) => {
      id = uuid;
    });

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.number',
      WFWorkflowActionParameters: {
        WFNumberActionNumber: 42,
        UUID: id,
      },
    };

    expect(actual).toEqual(expected);
  });

});
