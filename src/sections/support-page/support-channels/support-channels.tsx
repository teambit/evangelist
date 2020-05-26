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
import { Link } from '../../../elements/link';
import { links } from '../../../content/links';

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
			buttonsText: 'Slack',
			link: 'https://join.slack.com/t/bit-dev-community/shared_invite/enQtNzM2NzQ3MTQzMTg3LWI2YmFmZjQwMTkxNmFmNTVkYzU2MGI2YjgwMmJlZDdkNWVhOGIzZDFlYjg4MGRmOTM4ODAxNTIxMTMwNWVhMzg',
			buttonFlavor: styles.slack,
		},
		{
			title: 'Email',
			text: 'Open a support ticket and we’ll respond quickly.',
			icon: 'email',
			buttonsText: 'Contact',
			link: '/support',
			buttonFlavor: styles.email,
		},
		{
			title: 'GitHub',
			text: 'Open an issue or contribute OSS on GitHub.',
			icon: 'github-logo',
			buttonsText: 'GitHub',
			link: `${links.github}/issues`,
			buttonFlavor: styles.github,
		},
	];

	return (
		// <div>
		<Grid
			colMd={2}
			{...rest}
			data-bit-id="bit.evangelist/sections/enterprise-offering/hero"
			className={classNames(
				props.className,
				text.center,
				text.md.left,
				styles.mainGrid,
				centerColumn,
				styles.mainWrapper
			)}
		>
			<div className={classNames(styles.content)}>
				<H1 size={PossibleSizes.sm}>Any way you choose</H1>
				<Paragraph size={PossibleSizes.lg} className={styles.mainParagraph}>
					Get help quickly in Slack, Email, GitHub or any other way. Our team is here
					to help you any way you choose.
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
			<Image
				className={styles.image}
				alt={'alt'}
				src={'support-page/Illustrations/channels-section.svg'}
			/>
		</Grid>
		// </div>
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
			<Link external href={link} className={styles.link}>
				<Button className={classNames(styles.button, buttonFlavor)}>
					<Icon of={icon} />
					{buttonsText}
				</Button>
			</Link>
		</div>
	);
}
