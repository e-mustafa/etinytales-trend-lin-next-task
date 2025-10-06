'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

/**
 * UseActionFeedback hook
 * Handles action state and shows toast notifications or saves token and redirects
 * @param {object} state - action state object
 * @returns {void}
 */
export function useActionFeedback(state) {
	const router = useRouter();

	useEffect(() => {
		if (!state) return;

		// Show error toast
		if ((!state.status || state.errors) && state.message) {
			toast.error(state.message);
			return;
		}

		// Show success toast
		if (state.status && state.message) {
			toast.success(state.message);
		}

		// Save token and redirect
		if (state.status && state.data?.token) {
			localStorage.setItem('token', state.data.token);
		}

		if (state.status && state.redirect_to) {
			setTimeout(() => router.push(state.redirect_to), 1000);
		}
	}, [state, router]);
}
