import React, { PureComponent } from 'react';
import 'reset-css';
import './themes/book-font.scss';

import { Theme } from './themes/theme-provider';

import { getTooltip } from './utils/get-tooltip';

import { Homepage } from './pages/homepage';
import { EmbedIconSet } from './components/concrete/icon';

class App extends PureComponent {
	componentDidMount() {
		getTooltip();
	}
	render() {
		
		return (
			<Theme>
				<EmbedIconSet query="aqq93z" />
				<Homepage />		
			</Theme>
		);
	}
}

export default App;
