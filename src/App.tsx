import React, { PureComponent } from 'react';
import 'reset-css';
import './themes/book-font.scss';

import { Theme } from './themes/theme-provider';

// import { getTooltip } from './utils/get-tooltip';

import { EmbedIconSet } from './components/concrete/icon';

import { Homepage } from './pages/homepage';
import { ReusePage } from './pages/reuse';

class App extends PureComponent {
	// componentDidMount() {
	// 	getTooltip();
	// }
	render() {
		return (
			<Theme>
				<EmbedIconSet query="aqq93z" />
				<ReusePage />
				<Homepage />
			</Theme>
		);
	}
}

export default App;
