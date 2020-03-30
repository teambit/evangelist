[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https://api.bit.dev/scope/bit/evangelist)](https://bit.dev/bit/evangelist)
<a href="https://opensource.org/licenses/Apache-2.0"><img alt="apache" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></a>
<a href="https://github.com/teambit/example-templates/blob/master/README.md#contributing"><img alt="prs" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>

# Evangelist homepage

A modern component-first webpage.  

![screenshot](./docs/highlighter.png)

## Structure
See all of components [here](https://bit.dev/bit/evangelist)!  
Some components are generic enough and may be 'upgraded' to _bit.base_ (I'm looking at you, [eva-button](https://bit.dev/bit/evangelist/atom/eva-button))

![scope](./docs/scope-screenshot.png)

### Pages
full pages with margins, backgrounds. Because of its size, _Page_ components should not contain granular content, and only set the layout for individual sections.

### Sections
Individual areas containing most of the content, and can be reused between pages. Sections may occupy different spaces in different pages, so they should avoid sizing and backgrounds

### Content

Raw data objects for visual components (like MVC's model). A single ui component can use many _Content_ components at different places, and _Content_ may be presented differently in different ui components.

### Atom / 'concrete'
Components specific to this homepage. As atomic ui components, they are still abstract and should not contain texts and content.  

## Setup

1. Clone the repository
1. [Install bit](https://docs.bit.dev/docs/installation)
1. Run `yarn install` or `npm install` to install all packages.
1. Run `bit import` to sync components.
1. Start hacking!
