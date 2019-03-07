# Contributing

When contributing to this repository, please first discuss the change you wish to make via GitHub Issue.

## How to add a new Shortcut action

Adding a new Shortcut action is relatively straightforward.

1. Create a test Shortcut on your iOS device containing the new action.
2. Airdrop the Shortcut to your development machine.
3. Move it into a `/shortcuts` directory in the root of this project.
4. Run `node scripts/parse.js` and select your Shortcut and action. This will log out the parsed Shortcut data.
5. Copy this data into a new file in `src/actions`, optionally using an existing action as a template. The file (and action) you're creating should be the name of the action as it appears in the Shortcuts app, camelCased. For example, if you were adding the 'Run Home Scene' action, the file would be named `runHomeScene.ts` and it would export a function named `runHomeScene`. If in any doubt, use the already implemented actions as guides.
6. Connect up all Shortcut options to the function parameters. Try to be as thorough as possible and make sure you cover all possible options. You'll likely need to add some new types to `src/interfaces/WF` and `src/interfaces/WF/WFWorkflowActionParameters.ts`. You'll also want to check whether or not the action can be used as a 'Magic Variable'. If it can, don't forget to wrap the exported function with the `withActionOutput` function (see `src/actions/number.ts` as an example).
7. Export the new file from `src/actions/index.ts`.
8. Add tests for the new action to `__tests__/actions`. Again, try to be as thorough as possible and use another action's tests as a starting point.
9. Make sure all tests pass, and that the new action is documented with TypeDoc in the same way all other actions are.
10. Build a test Shortcut (you can find info on how to do that locally [here](https://github.com/joshfarrant/shortcuts-js/issues/22#issuecomment-443121866)) and Airdrop it to your phone to make sure that the new action works as expected.
11. Open a Pull Request!

If any of this doesn't make sense _please let me know_! I want to make this process as simple as possible, so any and all feedback is appreciated. Open an issue with any comments. 🙂
