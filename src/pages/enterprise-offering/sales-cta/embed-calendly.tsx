import { Component } from 'react';

const SCRIPT_TAG_ID = 'calendlyScript';
const STYLE_TAG_ID = 'calendlyStyle';
const CALENDLY_SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_STYLES_URL = 'https://assets.calendly.com/assets/external/widget.css';

export class EmbedCalendly extends Component {
	static refCounter = 0;

	componentDidMount() {
		if (EmbedCalendly.refCounter === 0) this.injectScript();
		EmbedCalendly.refCounter++;
	}

	componentWillUnmount() {
		EmbedCalendly.refCounter--;
		if (EmbedCalendly.refCounter === 0) this.destroyScript();
	}

	injectScript = () => {
		const toInject = [createCalendlyScript(), createCalendlyStylesheet()];

		toInject.forEach((element) => document.head.appendChild(element));
	};

	destroyScript = () => {
		const toRemove = [
			document.getElementById(SCRIPT_TAG_ID),
			document.getElementById(STYLE_TAG_ID),
		];

		toRemove.forEach((element) => element && document.head.removeChild(element));
	};

	render() {
		return null;
	}
}

function createCalendlyScript() {
	const scriptTag = document.createElement('script');
	scriptTag.id = SCRIPT_TAG_ID;
	scriptTag.setAttribute('src', CALENDLY_SCRIPT_URL);

	return scriptTag;
}

function createCalendlyStylesheet() {
	const scriptTag = document.createElement('link');
	scriptTag.id = STYLE_TAG_ID;
	scriptTag.setAttribute('rel', 'stylesheet');
	scriptTag.setAttribute('href', CALENDLY_STYLES_URL);

	return scriptTag;
}

// function calendlyInstance() {
// 	//@ts-ignore
// 	const calendly = window.Calendly;
// 	return calendly;
// }
