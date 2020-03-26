import React, { PureComponent /* CSSProperties */ } from 'react';
import 'reset-css';
import './App.css';

import { Theme } from '@bit/bit.base.theme.theme-provider';

import { EmbedIconSet } from './components/concrete/icon';

import { HybridHomepage } from './pages/hybrid-homepage';
import { ComponentHighlighter } from './components/concrete/component-highlighter';
import versionMap from './content/version-map/version-map';

const highlightBlacklist = new Set(['bit.evangelist/atom/testimonial']);

class App extends PureComponent {
	render() {
		return (
			<Theme>
				<ComponentHighlighter
					active
					versionMap={versionMap}
					blacklist={highlightBlacklist}
				>
					<EmbedIconSet query="aqq93z" />
					<HybridHomepage githubStars={10000} />
				</ComponentHighlighter>
			</Theme>
		);
	}
}

export default App;
