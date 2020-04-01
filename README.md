[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https://api.bit.dev/scope/bit/evangelist?UseCache=1)](https://bit.dev/bit/evangelist)
<a href="https://opensource.org/licenses/Apache-2.0"><img alt="apache" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></a>
<a href="https://github.com/teambit/example-templates/blob/master/README.md#contributing"><img alt="prs" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>

# Marketing components of bit.dev

The reusable set of React components used to build the [bit.dev marketing website](https://bit.dev). This repository is a **component-based micro-frontend** that exposes components.

[![screenshot](./docs/highlighter.png)](https://bit.dev)


## Component collection - choose and use

All components in this frontend codebase were [contained and exposed using Bit](https://github.com/teambit/bit) as a set of independently-usable components. See the **[Evangelist collection on bit.dev](https://bit.dev/bit/evangelist)** to explore and integrate any component into your project.

- Install independent components with npm/yarn.
- Use `bit import` to source and edit components locally for quick editing and integration.
- Try any component hands-on in a live playground.

[![scope](./docs/scope-screenshot.png)](https://bit.dev/bit/evangelist)


## This is a component-based micro-frontend

Wait.. what?

The entire bit.dev platform and website **isn't built as one monolithic application**.
Instead, it's built from **[components maintained in different codebases](https://docs.bit.dev/docs/workflows/microfrontends)** which are separately developed, then exposed and integrated together using [Bit](https://github.com/teambit/bit).

### Show me an example!

Take a look at the [bit.dev homepage](https://bit.dev/).  

You will notice that it's built from components that live in different front-end codebases:

- evangelist components (here).
- [base-ui components](https://github.com/teambit/base-ui).
- Container application (private).
- etc

We use [Bit](https://github.com/teambit/bit) to contain and expose components from any codebase as a set of APIs in [bit.dev](https://bit.dev) that can be integrated into different pages and applications. For example:

- Exposed evangelist components on bit.dev.
- Exposed [base-ui components on bit.dev](https://bit.dev/bit/base).


## Key components

### Pages
full pages with margins, backgrounds. Because of its size, _Page_ components should not contain granular content and only set the layout for individual sections.

### Sections
Individual areas containing most of the content, and can be reused between pages. Sections may occupy different spaces in different pages, so they should avoid sizing and backgrounds

### Content

Raw data objects for visual components (like MVC's model). A single ui component can use many _Content_ components at different places, and _Content_ may be presented differently in different ui components.

### Atom / 'concrete'
Components that are specific to this homepage. As atomic ui components, they are still abstract and should not contain texts and content.  

## Setup

1. Clone the repository
2. [Install bit](https://docs.bit.dev/docs/installation)
3. Run `yarn install` or `npm install` to install all packages.
4. Run `bit import` to sync components.
5. Start hacking!
