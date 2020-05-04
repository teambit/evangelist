import React from 'react';
import classNames from 'classnames';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { fullWidth } from '@bit/bit.base-ui.layout.align';

import { Button } from '../../../../elements/button';
import { Input, TextArea } from '../../../../input/input';
import { Error } from '../../../../elements/error';

import styles from './contact-form.module.scss';

export type ContactData = {
	email: string;
	message: string;
};

export type ContactFormProps = {
	onSubmit?: (values: ContactData) => Promise<any>;
};

const formValidation = Yup.object({
	email: Yup.string().required().email(),
	message: Yup.string().required(),
});

const noop = () => Promise.resolve();

export function ContactForm(props: ContactFormProps) {
	return (
		<Formik<ContactData>
			initialValues={{ email: '', message: '' }}
			validationSchema={formValidation}
			onSubmit={props.onSubmit || noop}
		>
			{(formik) => (
				<form className={styles.contactForm} onSubmit={formik.handleSubmit}>
					<div className={styles.field}>
						<Input
							className={fullWidth}
							placeholder="Company email"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.email && formik.errors.email ? (
							<Error className={styles.error}>{formik.errors.email}</Error>
						) : null}
					</div>

					<div className={styles.grow}>
						<TextArea
							className={fullWidth}
							placeholder="..."
							name="message"
							value={formik.values.message}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.touched.message && formik.errors.message ? (
							<Error className={styles.error}>{formik.errors.message}</Error>
						) : null}
					</div>

					<Button
						importance="cta"
						type="submit"
						className={classNames(fullWidth, styles.margin)}
						disabled={formik.isSubmitting}
					>
						Contact Sales
					</Button>
				</form>
			)}
		</Formik>
	);
}
