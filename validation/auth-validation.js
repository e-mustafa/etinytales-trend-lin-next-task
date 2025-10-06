import z from 'zod';

export const registerSchema = z
	.object({
		name: z.string().min(1, 'Full name is required'),
		email: z.email('Invalid email address').min(1, 'Email is required'),
		password: z
			.string()
			.min(1, 'Password is required')
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, {
				message:
					'Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character',
			}),
		password_confirmation: z.string().min(1, 'Password confirmation is required'),
		mobile: z.string().min(1, 'Mobile number is required').min(10, 'Mobile number must be at least 10 digits'),
		mobile_country_code: z.string().min(1, 'Mobile country code is required'),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: 'Passwords do not match',
		path: ['password_confirmation'],
	});

export const loginSchema = z.object({
	email: z.email('Invalid email address').min(1, 'Email is required'),
	password: z
		.string()
		.min(1, 'Password is required')
		// .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, {
		// 	message:
		// 		'Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character',
		// }),
});

export const verifySchema = z.object({
	code: z.string().min(1, 'Full name is required').min(6, 'verification code must be 6 digits'),
});
