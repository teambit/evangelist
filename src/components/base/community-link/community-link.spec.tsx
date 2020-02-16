import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { CommunityLink } from './community-link';

it('should render text children', () => {
	const { getByText } = render(<CommunityLink href="#">base Link</CommunityLink>);
	const rendered = getByText('base Link');
	expect(rendered).to.exist;
});

it('should generate an anchor tag', () => {
	const { getByText } = render(<CommunityLink href="#">Link</CommunityLink>);
	const rendered = getByText('Link');
	expect(rendered.tagName).to.be.equal('A');
});
