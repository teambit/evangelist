import React, { Component } from 'react';
import classNames from 'classnames';
import { Formik, FormikActions } from 'formik';
import * as Yup from 'yup';

import { fullWidth } from '@bit/bit.base-ui.layout.align';
import { Error } from '@bit/bit.base-ui.input.error';

import { Button } from '../../../../elements/button';
import { Input, TextArea } from '../../../../input/input';

import styles from './contact-form.module.scss';
import { ContactValues } from '../contact-values';

export type ContactFormProps = {
	onSubmitMessage?: (values: ContactValues) => any | Promise<any>;
} & React.FormHTMLAttributes<HTMLFormElement>;

const validationSchema = Yup.object({
	email: Yup.string().required().email(),
	message: Yup.string().required(),
});

export class ContactForm extends Component<ContactFormProps> {
	handleFormikSubmission = (
		values: ContactValues,
		{ setSubmitting }: FormikActions<ContactValues>
	) => {
		const { onSubmitMessage } = this.props;

		Promise.resolve(onSubmitMessage && onSubmitMessage(values))
			.catch()
			.then(() => setSubmitting(false));
	};

	render() {
		const { className, onSubmitMessage, onSubmit, ...rest } = this.props;

		return (
			<Formik<ContactValues>
				initialValues={{ email: '', message: '' }}
				validationSchema={validationSchema}
				onSubmit={this.handleFormikSubmission}
			>
				{(formik) => (
					<form
						{...rest}
						className={classNames(styles.contactForm, className)}
						onSubmit={formik.handleSubmit}
					>
						<div className={styles.field}>
							<Input
								className={fullWidth}
								placeholder="Work email"
								name="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={!!(formik.touched.email && formik.errors.email)}
							/>
							{formik.touched.email && formik.errors.email && (
								<Error className={styles.error}>{formik.errors.email}</Error>
							)}
						</div>

						<div className={styles.grow}>
							<TextArea
								className={fullWidth}
								placeholder="Tell us what you need..."
								name="message"
								value={formik.values.message}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={!!(formik.touched.message && formik.errors.message)}
							/>
							{formik.touched.message && formik.errors.message && (
								<Error className={styles.error}>{formik.errors.message}</Error>
							)}
						</div>

						<Button
							importance="cta"
							type="submit"
							className={classNames(fullWidth, styles.margin)}
							loading={formik.isSubmitting}
							disabled={formik.isSubmitting}
						>
							Contact Sales
						</Button>
					</form>
				)}
			</Formik>
		);
	}
}
