
# lightning-solid-mdl-icons

Introducing Google MDL Icon components for @lightningjs/solid - a sophisticated and efficient solution for incorporating Material Design icons in LightningJS/Solid applications.

## Setup

### Installation
To integrate `lightning-solid-mdl-icons` into your project, use one of the following package managers:
- npm: `npm install @yfuu/lightning-solid-mdl-icons`
- yarn: `yarn add @yfuu/lightning-solid-mdl-icons`
- bun: `bun x pnpm add @yfuu/lightning-solid-mdl-icons`

### Configuration 
To configure, in `AppCoreExtensions.js` make the following changes:
1. Import `Fonts` from `@yfuu/lightning-solid-mdl-icons`:
   ```javascript
   import { Fonts } from "@yfuu/lightning-solid-mdl-icons";
   ```
2. In the `run` method of `AppCoreExtension`, add the following code:
   ```typescript
   Fonts.map(font => {
       stage.fontManager.addFontFace(font);
   });
   ```

### Usage
The naming convention for components is straightforward and intuitive:
- Each component's name begins with a capitalized icon name followed by `Icon`, e.g., `HomeIcon`, `SearchIcon`, `DesignservicesIcon`.
- Names are not in camel case; only the first letter of the icon name and the 'I' in 'Icon' are capitalized.
- For names starting with a number, prepend an underscore, e.g., `_123Icon` becomes `_3mpIcon`.

#### Props
- `type`: Determines the font type of the icon, as defined in the `FontTypes` enum. For example, `FontTypes.rounded`.
- `color`: Sets the icon's color, adhering to LightningJS/Solid style color specifications.
- `size`: Specifies the icon's size, following LightningJS/Solid style size units.
- `focusedColor`: Defines the icon's color when focused, in line with LightningJS/Solid style color properties.
- `focusedSize`: Determines the icon's size when focused, using LightningJS/Solid style size units.

#### Example
```typescript
import { HomeIcon } from "@yfuu/lightning-solid-mdl-icons";
import { FontTypes } from "@yfuu/lightning-solid-mdl-icons";

<HomeIcon
    type={FontTypes.rounded}
    color={styles.button_text.color} 
    size={styles.button_text.fontSize} 
    focusedSize={styles.button_text.focus.fontSize} 
    focusedColor={styles.button_text.focus.color} 
/>
```

## Authors
- [@nanofuxion](https://www.github.com/nanofuxion)