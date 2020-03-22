import React from 'react';

const EMBED_LINK = 'https://s3.amazonaws.com/icomoon.io/158286/Bit/style.css';

export function EmbedIconSet({ query = 'dqaogs' }: { query: string }) {
	return <link rel="stylesheet" href={`${EMBED_LINK}?${query}`} />;
}
