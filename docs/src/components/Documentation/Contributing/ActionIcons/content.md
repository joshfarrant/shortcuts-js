[WIP: you can set an action icon via the `@icon` tag...]

```ts
/**
 * @action Add to Reading List
 * @section Content Types > Web > Safari
 * @icon Safari
 *
 * Adds URLs passed into the action to your reading list.
 *
 * ```js
 * addToReadingList();
 * ```
 */
const addToReadingList = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.readinglist',
  WFWorkflowActionParameters: {},
});
```

[WIP: here are the available action icons...]
