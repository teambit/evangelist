import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { Image } from './image';

it('should render', () => {
	const { getByTestId } = render(
		<Image data-testid="test-img" alt="alt world" src="big-logo" />
	);
	const rendered = getByTestId('test-img');

	expect(rendered.tagName).to.equal('IMG');
	expect(rendered.getAttribute('alt')).to.equal('alt world');
});


it('should pass classname', () => {
	const { getByTestId } = render(
		<Image data-testid="test-img" className="testclass" alt="alt" src="blabla" />
	);
	const rendered = getByTestId('test-img');

	expect(rendered.className).to.include('testclass');
});

//cannot test css-modules with mocha:

// it('should prefix src with storageUrl', () => {
// 	const { getByTestId } = render(
// 		<Image data-testid="test-img" alt="alt world" src="big-logo" />
// 	);
// 	const rendered = getByTestId('test-img');

// 	expect(rendered.getAttribute('src')).to.equal('staticStorageUrl/big-logo');
// });

// it('should set fullwidth, when props have fullwidth', () => {
// 	const { getByTestId } = render(
// 		<Image data-testid="test-img" fullWidth className="testclass" alt="alt" src="blabla" />
// 	);
// 	const rendered = getByTestId('test-img');

// 	expect(rendered.className).to.include('fullWidth');
// });
