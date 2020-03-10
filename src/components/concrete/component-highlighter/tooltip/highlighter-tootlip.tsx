import tippy from 'tippy.js';

import styles from './highlighter-tootlip.module.scss';

const scopeUrl = 'https://bit.dev/bit/marketing';

type DictionaryOptions = {
	[key: string]: string;
};
const componentDictionary: DictionaryOptions = {
	heading: `${scopeUrl}/concrete/heading`,
	paragraph: `${scopeUrl}/base/paragraph`,
	mainSection: `${scopeUrl}/sections/main-section`,
	image: `${scopeUrl}/concrete/image`,
	primaryButton: `${scopeUrl}/base/primary-button`,
	ctaButton: `${scopeUrl}/concrete/cta-button`,
	iconLine: `${scopeUrl}/concrete/icon-line`,
	marketingCard: `${scopeUrl}/concrete/marketing-card`,
	label: `${scopeUrl}/base/label`,
	commentCarousel: 'https://bit.dev/bit/web/components/comment-carousel',
	slackLink: `${scopeUrl}/community-links/slack-link`,
	twitterLink: `${scopeUrl}/community-links/twitter-link`,
	githubLink: `${scopeUrl}/community-links/github-link`,
	twitterCard: `${scopeUrl}/concrete/twitter-card`,
	separator: `${scopeUrl}/base/separator`,
	summaryCards: `${scopeUrl}/sections/summary-cards`,
	devSection: `${scopeUrl}/sections/dev-section`,
	autoSection: `${scopeUrl}/sections/auto-section`,
	ctaSection: `${scopeUrl}/sections/cta`,
	buildSection: `${scopeUrl}/sections/build-section`,
	deploySection: `${scopeUrl}/sections/deploy-section`,
	reuseSection: `${scopeUrl}/sections/reuse`,
	communitySection: `${scopeUrl}/sections/community`,
	'base/link': `${scopeUrl}/base/link`,
	'base/themed-text': `${scopeUrl}/base/themed-text`,
	'sections/auto-docs': `${scopeUrl}/sections/auto-docs`,
	'sections/booking-breakdown': `${scopeUrl}/sections/booking-breakdown`,
	'sections/component-advantages': `${scopeUrl}/sections/component-advantages`,
	'sections/enterprise-section': `${scopeUrl}/sections/enterprise-section`,
	'sections/hybrid-perfect-sync': `${scopeUrl}/sections/hybrid-perfect-sync`,
	'sections/independent-teams': `${scopeUrl}/sections/independent-teams`,
	'sections/reuse-landing-section': `${scopeUrl}/sections/reuse-landing-section`,
	'sections/sync-section': `${scopeUrl}/sections/sync-section`,
	'sections/talk-to-experts': `${scopeUrl}/sections/talk-to-experts`,
};

export function activateHighlighterTooltip(context?: HTMLDivElement) {
	//falling back to document in run time, to avoid any serverside problems
	const elements = (context || document).querySelectorAll(`[data-bit-id]`);

	return tippy(elements, {
		theme: styles.tooltip,

		content(reference) {
			const id = reference.getAttribute('data-bit-id') || ''; // TODO - handle when it is undefined
			return `<a allowHTML id=${id} target="_blank" href=${componentDictionary[id]}>${id}</a>`;
		},

		placement: 'left-start',
		ignoreAttributes: true,
		hideOnClick: false,
		lazy: true,
		interactive: true,
		interactiveBorder: 20,

		maxWidth: 'none',
		delay: [200, 0],
		distance: 0,

		// boundary: 'viewport',
	});
}
