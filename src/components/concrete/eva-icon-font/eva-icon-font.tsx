import React from 'react';

const EMBED_LINK = 'https://s3.amazonaws.com/icomoon.io/158286/Bit/style.css';

type EvaIconFont = {
	/**
	 * query id for cache busting (copy from icomoon's _produciton_ link)
	 */
	query: string;
} & React.LinkHTMLAttributes<HTMLLinkElement>;

/**
 * Embeds the official icon font of [bit.dev](https://bit.dev).
 *
 * Place at the root element, and use [bit-icon](https://bit.dev/bit/evangelist/atom/bit-icon) to place icons anywhere in the page.
 * @example
 * <html>
 *   <head>
 *     <EvaIconFont query='aqq93z' />
 *   <head>
 * </html>
 */
export function EvaIconFont({ query = 'dqaogs' }: EvaIconFont) {
	return <link rel="stylesheet" href={`${EMBED_LINK}?${query}`} />;
}
