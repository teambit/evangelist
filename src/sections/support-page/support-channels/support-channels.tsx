import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { text, marginCenter } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { centerColumn, textColumn } from '@bit/bit.base-ui.layout.page-frame';

import { Button } from '../../../elements/button';
import { H1, H5, H6 } from '../../../elements/heading';
import { Image } from '../../../elements/image';
import { Icon } from '../../../elements/icon';

import styles from './support-channels.module.scss';

type SupportChannelsProps = {
	/** handles 'book meeting' call to action */
	onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLElement>;

/**
 * Opening section for the Enterprise offering page.
 * @name EcoSystem
 */
export function SupportChannels(props: SupportChannelsProps) {
	const { onBookMeeting, ...rest } = props;

	const channelsData = [
		{
			title: 'Slack',
			text: 'Chat with the team and the community on Slack.',
			icon: 'slack',
			buttonsText: 'Slack channel',
			link: 'kjsdhf',
			buttonFlavor: styles.slack,
		},
		{
			title: 'Email',
			text: 'Open a support ticket and we’ll respond quickly.',
			icon: 'email',
			buttonsText: 'Get in touch',
			link: 'kjsdhf',
			buttonFlavor: styles.email,
		},
		{
			title: 'GitHub',
			text: 'Open an issue or contribute OSS on GitHub.',
			icon: 'github-logo',
			buttonsText: 'teambut/bit',
			link: 'kjsdhf',
			buttonFlavor: styles.github,
		},
	];

	return (
		<div>
			<Grid
				colL={2}
				{...rest}
				data-bit-id="bit.evangelist/sections/enterprise-offering/hero"
				className={classNames(
					props.className,
					text.center,
					text.l.left,
					styles.mainGrid,
					centerColumn
				)}
			>
				<div className={classNames(styles.content)}>
					<H1 size={PossibleSizes.sm}>We support developers.</H1>
					<Paragraph size={PossibleSizes.lg} className={styles.mainParagraph}>
						We provide the support we would like to get as developers.
					</Paragraph>

					<div className={styles.buttons}>
						{channelsData.map((channel, index) => (
							<ChannelButton
								title={channel.title}
								key={index}
								text={channel.text}
								icon={channel.icon}
								buttonsText={channel.buttonsText}
								buttonFlavor={channel.buttonFlavor}
								link={channel.link}
							/>
						))}
					</div>
				</div>
				<Image alt={'alt'} src={'support-page/Illustrations/channels-section.svg'} />
			</Grid>
		</div>
	);
}

type ChannelButtonProps = {
	title?: string;
	text?: string;
	icon: string;
	buttonsText?: string;
	className?: string;
	buttonFlavor?: string;
	link: string;
} & HTMLAttributes<HTMLElement>;

export function ChannelButton({
	title,
	text,
	icon,
	buttonsText,
	buttonFlavor,
	link,
}: ChannelButtonProps) {
	return (
		<div className={styles.wrapper}>
			<H6 size={PossibleSizes.xxs}>{title}</H6>
			<Paragraph size={PossibleSizes.md} className={styles.paragraph}>
				{text}
			</Paragraph>
			<a href={link} className={styles.link}>
				<Button className={classNames(styles.button, buttonFlavor)}>
					<Icon of={icon} />
					{buttonsText}
				</Button>
			</a>
		</div>
	);
}
