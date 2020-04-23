import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Grid } from '@bit/bit.base-ui.layout.grid-component';

import { Image } from '../../../elements/image';

import styles from './integrations.module.scss';

export function Integrations(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<Grid
			col={3}
			colMd={5}
			colLg={7}
			{...props}
			className={classNames(props.className, styles.integrationBadges)}
		>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-asana.svg"
				alt="asana"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-jenkins.svg"
				alt="jenkins"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-aws.svg"
				alt="aws"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-azure.svg"
				alt="azure"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-bitbucket.svg"
				alt="bitbucket"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-circle.svg"
				alt="circle"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-confluence.svg"
				alt="confluence"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-github.svg"
				alt="github"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-gitlub.svg"
				alt="gitlub"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-google.svg"
				alt="google"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-jira.svg"
				alt="jira"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-netlify.svg"
				alt="netlify"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-slack.svg"
				alt="slack"
				fullWidth
			/>
			<Image
				src="enterprise-offering-v1/5-ecosystem-section/logos/logo-tavis.svg"
				alt="tavis"
				fullWidth
			/>
		</Grid>
	);
}
