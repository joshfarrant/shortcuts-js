import { speakText } from '../../src/actions';

describe('speakText function', () => {
  it('is a function', () => {
    expect(typeof speakText).toBe('function');
  });

  it('builds a speakText action when no parameters are passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.speaktext',
      WFWorkflowActionParameters: {
        WFSpeakTextLanguage: 'Default',
        WFSpeakTextPitch: 1.0,
        WFSpeakTextRate: 0.5,
        WFSpeakTextVoice: 'Default',
        WFSpeakTextWait: true,
      },
    };
    const actual = speakText({});

    expect(actual).toEqual(expected);
  });

  it('builds a text action when parameters are passed', () => {
    const testLanguage = 'English';
    const testPitch = 0.75;
    const testRate = 0.5;
    const testVoice = 'Irish';
    const testWaitUntilFinished = false;

    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.speaktext',
      WFWorkflowActionParameters: {
        WFSpeakTextLanguage: testLanguage,
        WFSpeakTextPitch: testPitch,
        WFSpeakTextRate: testRate,
        WFSpeakTextVoice: testVoice,
        WFSpeakTextWait: testWaitUntilFinished,
      },
    };
    const actual = speakText({
      language: 'English',
      pitch: 0.75,
      rate: 0.5,
      voice: 'Irish',
      waitUntilFinished: false,
    });

    expect(actual).toEqual(expected);
  });
});
