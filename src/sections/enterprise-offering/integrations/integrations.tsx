import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Image } from '../../../elements/image';

import styles from './integrations.module.scss';

/**
 * A section showing all the available integrations as part of the Bit enterprise solution.<br/>
 * Uses a gentle rotating animation to fit them into one screen.
 * @name Integrations
 */
export function Integrations(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={classNames(props.className, styles.integrationBadges)}
			data-bit-id="bit.evangelist/sections/enterprise-offering/integrations"
		>
			<div className={styles.logos}>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/asana.svg"
					alt="asana"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/jenkins.svg"
					alt="jenkins"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/aws.svg"
					alt="aws"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/azure.svg"
					alt="azure"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/bitbucket.svg"
					alt="bitbucket"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/circle.svg"
					alt="circle"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/confluence.svg"
					alt="confluence"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/github.svg"
					alt="github"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/gitlab.svg"
					alt="gitlab"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/google-cloud.svg"
					alt="google"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/jira.svg"
					alt="jira"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/netlify.svg"
					alt="netlify"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/slack.svg"
					alt="slack"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/tavis.svg"
					alt="tavis"
				/>

				{/* SECOND LOOP (for infinite animation) */}

				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/asana.svg"
					alt="asana"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/jenkins.svg"
					alt="jenkins"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/aws.svg"
					alt="aws"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/azure.svg"
					alt="azure"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/bitbucket.svg"
					alt="bitbucket"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/circle.svg"
					alt="circle"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/confluence.svg"
					alt="confluence"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/github.svg"
					alt="github"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/gitlab.svg"
					alt="gitlab"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/google.svg"
					alt="google"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/jira.svg"
					alt="jira"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/netlify.svg"
					alt="netlify"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/slack.svg"
					alt="slack"
				/>
				<Image
					src="enterprise-offering-v1/5-ecosystem-section/logos/tavis.svg"
					alt="tavis"
				/>
			</div>
		</div>
	);
}
