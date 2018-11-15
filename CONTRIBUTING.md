# Contributing

When contributing to this repository, please first discuss the change you wish to make via GitHub Issue.

## How to add a new Shortcut action

Adding a new Shortcut action is relatively straightforward.

1. Create a test Shortcut on your iOS device containing the new action.
2. Airdrop the Shortcut to your development machine.
3. Move it into a `/shortcuts` directory in the root of this project.
4. Run `node scripts/parse.js` and select your Shortcut and action. This will log out the parsed Shortcut data.
5. Copy this data into a new file in `src/actions`, optionally using an existing action as a template.
6. Connect up all Shortcut options to the function parameters. Try to be as thorough as possible and make sure you cover all possible options. You'll likely need to add some new types to `src/interfaces/WF` and `src/interfaces/WF/WFWorkflowActionParameters.ts`.
7. Export the new file from `src/actions/index.ts`.
8. Add tests for the new action to `__tests__/actions`. Again, try to be as thorough as possible and use another action's tests as a starting point.
9. Make sure all tests pass, and that the new action is documented with JSDoc in the same way all other actions are.
10. Build a test Shortcut and Airdrop it to your phone to make sure that the new action works as expected.
11. Open a Pull Request!
