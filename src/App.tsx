import React, { PureComponent /* CSSProperties */ } from 'react';
import 'reset-css';
import './App.css';

import { Theme } from '@bit/bit.base-ui.theme.theme-provider';

import { EvaIconFont } from './theme/icon-font';

import { HybridHomepage } from './pages/hybrid-homepage';
import { ComponentHighlighter } from './debugging/component-highlighter';
import versionMap from './content/version-map/version-map';

const highlightBlacklist = new Set(['bit.evangelist/marketing/testimonial']);

class App extends PureComponent {
	render() {
		return (
			<Theme>
				<ComponentHighlighter
					active
					versionMap={versionMap}
					blacklist={highlightBlacklist}
					fullScopeName={false}
				>
					<EvaIconFont query="aqq93z" />
					<HybridHomepage githubStars={10000} />
				</ComponentHighlighter>
			</Theme>
		);
	}
}

export default App;
