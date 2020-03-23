import React, { PureComponent /* CSSProperties */ } from 'react';
import 'reset-css';
import './App.css';

import { Theme } from './themes/theme-provider';

import { EmbedIconSet } from './components/concrete/icon';

import { HybridHomepage } from './pages/hybrid-homepage';
import { ComponentHighlighter } from './components/concrete/component-highlighter';
import { componentDictionary } from './content/components-highlight-dictionary';
import versionMap from './content/version-map/version-map';

class App extends PureComponent {
	render() {
		return (
			<Theme>
				<ComponentHighlighter
					active
					componentsDictionary={componentDictionary}
					versionMap={versionMap}
				>
					<EmbedIconSet query="aqq93z" />
					<HybridHomepage githubStars={10000} />
				</ComponentHighlighter>
			</Theme>
		);
	}
}

export default App;
