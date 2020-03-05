import React, { PureComponent /* CSSProperties */ } from 'react';
import 'reset-css';
import './App.css';

import { Theme } from './themes/theme-provider';

// import { getTooltip } from './utils/get-tooltip';

import { EmbedIconSet } from './components/concrete/icon';

// import { Homepage } from './pages/homepage';
// import { ReusePage } from './pages/reuse';
import { HybridHomepage } from './pages/hybrid-homepage';

class App extends PureComponent {
	// componentDidMount() {
	// 	getTooltip();
	// }
	render() {
		return (
			<Theme>
				<EmbedIconSet query="aqq93z" />
				<HybridHomepage githubStars={10000} />
			</Theme>
		);
	}
}

export default App;
