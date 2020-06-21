import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './docs-section.module.scss';


import { H1, H3, H5 } from '../../../elements/heading';
import { VersionTag } from '../../../workspace-components/version-tag';

// import { Avatar } from '../../../workspace-components/avatar';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Paragraph, ParagraphProps } from '@bit/bit.base-ui.text.paragraph';
import { mutedText } from '@bit/bit.base-ui.text.muted-text';
import { LabelList } from '../../../workspace-components/label';
import { Separator } from '../../../workspace-components/separator';

import { InstallMethods } from '../../../workspace-components/install-methods';

function getText(text: Bla) {
	// var text = 'Hello `@James P. Pauli`, How r `you`.';

	const markupText = text.text.replace(/`(.*?)`/g, '<code>$1</code>');
	console.log(markupText);
	return markupText;
}

type Bla = {
	text: string;
};

function CreateMarkup(text: Bla): JSX.Element {
	const formattedText = getText(text);
	return (
		<div
			className={styles.enhancedText}
			dangerouslySetInnerHTML={{ __html: formattedText }}
		/>
	);
}


export type DocsSectionProps = {
	// version?: Version;
	title: string;
	subTitle: string;
	labels?: string[];
} & HTMLAttributes<HTMLDivElement>;
/**
 * change log section
 * @name DocsSection
 */
export function DocsSection({ title, subTitle, labels, className, ...rest }: DocsSectionProps) {
	return (
		<div className={classNames(styles.docsMainBlock, className)} {...rest}>
			<div className={styles.topRow}>
				<H1 className={classNames(styles.heading, styles.marginRight)}>{title}</H1>
				<VersionTag className={styles.marginRight}>Latest</VersionTag>
			</div>
			<Paragraph
				className={classNames(mutedText, className)}
				size={PossibleSizes.xxl}
			>
				{subTitle}
			</Paragraph>
			<LabelList>{labels}</LabelList>
			<Separator />
			<InstallMethods
				data={[
					{ title: 'install package', content: '@google.material-ui/radio' },
					{
						title: 'Import from CDN',
						content: 'https://esm.bit.dev/@google/material-ui/radio/',
					},
				]}
			/>
			<Paragraph>
				You can set the type of the choice to be either a radio or a checkbox. Using
				radio type allows you to use Choice component inside Google’s Choice Group.
			</Paragraph>
			<CreateMarkup text=" `RadioGroup` is a helpful wrapper used to group `radio` components that provides an easier API, and proper keyboard accessibility to the group." />
		</div>
	);
}

