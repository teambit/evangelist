## Heading

A set of concrete heading for the Evangelist homepage.
H1, H2, H3, H4, H5, H6.

For example,

```tsx
import { H1, H2 } from './@bit/bit.evangelist.elements.heading';

<H1>Page title</H1>
<p>Lorem ipsum</p>

<H2>Section title</H2>
<p>Nullam fringilla rhoncus finibus. Fusce magna libero, iaculis nec varius in, porttitor id augue.</p>
```

Each header is equivalent to its html element (e.g. `<H1/>` is `<h1/>`, etc).

### Size

To keep a consistent look to the site, headers come in a limited set of sizes.  
While each header corresponds to a default font-size, it can be overridden using the size prop:

```tsx
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';

<H2 size={PossibleSizes.md}>A smaller h2</H2>
```
