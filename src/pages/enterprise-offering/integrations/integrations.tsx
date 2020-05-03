import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Image } from '../../../elements/image';

import styles from './integrations.module.scss';

export function Integrations(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={classNames(props.className, styles.integrationBadges)}>
			<div className={styles.logos}>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-asana.svg"
					alt="asana"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-jenkins.svg"
					alt="jenkins"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-aws.svg"
					alt="aws"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-azure.svg"
					alt="azure"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-bitbucket.svg"
					alt="bitbucket"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-circle.svg"
					alt="circle"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-confluence.svg"
					alt="confluence"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-github.svg"
					alt="github"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-gitlub.svg"
					alt="gitlub"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-google.svg"
					alt="google"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-jira.svg"
					alt="jira"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-netlify.svg"
					alt="netlify"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-slack.svg"
					alt="slack"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-tavis.svg"
					alt="tavis"
				/>

				{/* SECOND LOOP (for infinite animation) */}

				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-asana.svg"
					alt="asana"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-jenkins.svg"
					alt="jenkins"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-aws.svg"
					alt="aws"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-azure.svg"
					alt="azure"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-bitbucket.svg"
					alt="bitbucket"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-circle.svg"
					alt="circle"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-confluence.svg"
					alt="confluence"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-github.svg"
					alt="github"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-gitlub.svg"
					alt="gitlub"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-google.svg"
					alt="google"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-jira.svg"
					alt="jira"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-netlify.svg"
					alt="netlify"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-slack.svg"
					alt="slack"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/logo-tavis.svg"
					alt="tavis"
				/>
			</div>
		</div>
	);
}
