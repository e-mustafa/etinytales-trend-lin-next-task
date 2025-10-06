'use server';

import { apiLink, isPROD } from '@/configs/general-config';
import { verifySchema } from '@/validation/auth-validation';
import { cookies } from 'next/headers';

export async function verifyAccountAction(prevState, formData) {
	try {
		// Convert FormData to a plain object
		const data = Object.fromEntries(formData?.entries() || []);

		// Validate form data using Zod schema
		const parsed = verifySchema.safeParse(data);
		if (!parsed.success) {
			return {
				success: false,
				errors: parsed.error.flatten().fieldErrors,
				// values: data,
			};
		}

		// Get token from cookies
		const cookiesStore = await cookies();
		const token = cookiesStore.get('token')?.value;

		if (!token) {
			return {
				status: false,
				status_code: 401,
				message: 'please login first',
				redirect_to: '/auth/login',
			};
		}

		// Send request to external API
		const res = await fetch(`${apiLink}/auth/verify-email`, {
			method: 'POST',
			body: formData,
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			cache: 'no-store',
		});

		const result = await res.json();

		if (!res.ok) {
			!isPROD && console.error(result);
			return result;
		}

		// Success:
		return { ...result, redirect_to: '/auth/login' };
	} catch (err) {
		!isPROD && console.error('verify account error:', err);
		return err;
	}
}
