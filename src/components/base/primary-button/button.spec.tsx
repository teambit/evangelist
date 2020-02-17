import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { PrimaryButton } from './button';

it('should render', () => {
	const { getByText } = render(<PrimaryButton>I am primary button</PrimaryButton>);
	const rendered = getByText('I am primary button');

	expect(rendered).to.exist;
});

it('should pass classname', () => {
	const { getByText } = render(
		<PrimaryButton className="test-class">I am primary button</PrimaryButton>
	);
	const rendered = getByText('I am primary button');

	expect(rendered.className).to.include('test-class');
});

// css modules checks do not work with mocha tester, yet

// it('should use low elevation by default', () => {
// 	const { getByText } = render(
// 		<PrimaryButton className="test-class">I am primary button</PrimaryButton>
// 	);
// 	const rendered = getByText('I am primary button');

// 	expect(rendered.className).to.include('low');
// });

// it('should use specific elevation', () => {
// 	const { getByText } = render(
// 		<PrimaryButton className="test-class" elevation="high">
// 			I am primary button
// 		</PrimaryButton>
// 	);
// 	const rendered = getByText('I am primary button');

// 	expect(rendered.className).to.include('hight');
// });
