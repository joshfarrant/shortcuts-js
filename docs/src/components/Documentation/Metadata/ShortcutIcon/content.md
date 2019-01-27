## Metadata

### Shortcut Icon

In `buildShortcut()`, the `icon` option let you specify what icon the Shortcut will have. A total of 15 color shades and 256 glyphs (with the addition of 2 unreleased ones) can be used within Shortcuts JS.

```js
const {
  buildShortcut,
} = require('@joshfarrant/shortcuts-js');
const {
  COLORS,
  GLYPHS,
} = require('@joshfarrant/shortcuts-js/meta');

const actions = [];

const shortcut = buildShortcut(actions, {
  icon: {
    color: COLORS.ORANGE,
    glyph: GLYPHS.ROCKET,
  },
});
```

Default icon color and glyph are `.YELLOW` and `.KEYBOARD` respectively.  
Click on one of the following icons to get the corresponding codename.
