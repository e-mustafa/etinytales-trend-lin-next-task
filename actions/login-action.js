'use server';

import { apiLink, isPROD } from '@/configs/general-config';
import { loginSchema } from '@/validation/auth-validation';
import { cookies } from 'next/headers';

export async function loginAction(prevState, formData) {
	try {
		const data = Object.fromEntries(formData?.entries() || []);

		// Validate form data using Zod schema
		const parsed = loginSchema.safeParse(data);

		if (!parsed.success) {
			delete data.password;
			return {
				success: false,
				errors: parsed.error.flatten().fieldErrors,
				values: data,
			};
		}

		// Send request to external API
		const res = await fetch(`${apiLink}/auth/login`, {
			method: 'POST',
			body: formData,
			headers: {
				Accept: 'application/json',
			},
			cache: 'no-store',
		});

		const result = await res.json();

		if (!res.ok) {
			!isPROD && console.error(result);
			// Remove sensitive fields before returning
			delete data.password;
			return {
				...result,
				values: data,
			};
		}

		if (!result?.data?.token) {
			return {
				status: false,
				status_code: 401,
				message: 'please login first',
				redirect_to: '/auth/login',
			};
		}

		// Success:
		// add token and user to cookies
		const { token, id, name, email, image, mobile, mobile_country_code, count_items_cart } = result?.data;

		// set bearer token to cookie
		cookies().set('token', token, {
			httpOnly: true,
			secure: isPROD,
			sameSite: 'lax',
			path: '/',
			maxAge: 60 * 60 * 24 * 7, // 7 days
		});

		// Store basic user info (readable by client)
		cookies().set(
			'user',
			JSON.stringify({
				id,
				name,
				email,
				image,
				mobile,
				mobile_country_code,
				count_items_cart,
			}),
			{
				httpOnly: false, // can read by client
				secure: isPROD,
				path: '/',
				maxAge: 60 * 60 * 24 * 7,
			}
		);

		let redirect_to = '/dashboard';
		if (result.status && !result.data.email_verified_at) {
			redirect_to = '/auth/verify-account';
		}

		return { ...result, redirect_to };
	} catch (err) {
		!isPROD && console.error('login error:', err);
		return err;
	}
}
