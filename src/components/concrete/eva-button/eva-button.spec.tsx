import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { EvaButton } from './eva-button';

it('should render', () => {
	const { getByText } = render(<EvaButton>I am primary button</EvaButton>);
	const rendered = getByText('I am primary button');

	expect(rendered).to.exist;
});

it('should pass classname', () => {
	const { getByText } = render(
		<EvaButton className="test-class">I am primary button</EvaButton>
	);
	const rendered = getByText('I am primary button');

	expect(rendered.className).to.include('test-class');
});

it('should use variation html attribute', () => {
	const { getByText } = render(
		<EvaButton className="test-class">I am primary button</EvaButton>
	);
	const rendered = getByText('I am primary button');

	expect(rendered.getAttribute('data-variation')).to.equal('normal')
});

it('should have "cta" as html attribute, when using cta variation', () => {
	const { getByText } = render(
		<EvaButton importance="cta" className="test-class">I am primary button</EvaButton>
	);
	const rendered = getByText('I am primary button');

	expect(rendered.getAttribute('data-variation')).to.equal('cta')
})

// css modules checks do not work with mocha tester, yet

// it('should use low elevation by default', () => {
// 	const { getByText } = render(
// 		<EvaButton className="test-class">I am primary button</EvaButton>
// 	);
// 	const rendered = getByText('I am primary button');

// 	expect(rendered.className).to.include('low');
// });

// it('should use specific elevation', () => {
// 	const { getByText } = render(
// 		<EvaButton className="test-class" elevation="high">
// 			I am primary button
// 		</EvaButton>
// 	);
// 	const rendered = getByText('I am primary button');

// 	expect(rendered.className).to.include('hight');
// });
