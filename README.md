# Shortcuts JS

![Shortcuts JS Logo](./assets/logo.png)

A Node.js iOS 12 Shortcuts creator.

[Documentation](https://shortcuts.fun/module-actions.html) | [Contributing](https://github.com/joshfarrant/shortcuts-js/blob/master/CONTRIBUTING.md) | [Medium](https://medium.com/@JoshFarrant/creating-ios-12-shortcuts-with-javascript-and-shortcuts-js-942420ca9904)

## Minimal example

```js
const fs = require('fs');

const {
  buildShortcut,
  withVariables,
} = require('@joshfarrant/shortcuts-js');
const {
  calculate,
  comment,
  number,
  showResult
} = require('@joshfarrant/shortcuts-js/actions');

// We'll use this later to reference the output of a calculation
let calcId;

// Define our list of actions
const actions = [
  comment({
    text: 'Hello, world!',
  }),
  number({
    number: 42,
  }),
  calculate({
    operand: 3,
    operation: '/',
  }, (id) => {
    // We'll use this again in a moment
    calcId = id;
  }),
  showResult({
    /**
     * We can use the result of the calculation in this shortcuts's input
     * by passing the string to the 'withVariables' tag function
     */
    text: withVariables`Total is ${calcId}!`,
  }),
];

// Generate the Shortcut data
const shortcut = buildShortcut(actions);

// Write the Shortcut to a file in the current directory
fs.writeFile('My Fancy Shortcut.shortcut', shortcut, (err) => {
  if (err) {
    console.error('Something went wrong :(', err);
    return;
  }
  console.log('Shortcut created!');
});
```

Running this code will build a shortcut named 'My Fancy Shortcut' in the current directory.

This can be AirDropped to an iPhone or iPad running iOS 12, at which point it will be automatically opened and imported into Shortcuts.

![Shortcut Image](./assets/demo-shortcut.jpeg)
