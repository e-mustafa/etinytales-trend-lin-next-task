'use client';

import { loginAction } from '@/actions/login-action';
import { useActionFeedback } from '@/hooks/useActionFeedback';
import { useActionState, useId } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import FieldError from './field-error';

const initialState = { errors: {} };
export default function LoginForm() {
	const id = useId();
	const [state, formAction, isPending] = useActionState(loginAction, initialState);

	useActionFeedback(state);

	return (
		<form action={formAction} className='grid gap-6 mt-4'>
			<div className='*:not-first:mt-2'>
				<Label htmlFor={`${id}-email`}>Email</Label>
				<Input
					id={`${id}-email`}
					name='email'
					defaultValue={state.values?.email || ''}
					placeholder='hi@yourcompany.com'
					type='email'
					required
					aria-invalid={!!state.errors?.email}
					disabled={isPending}
				/>
				<FieldError message={state.errors?.email?.[0]} />
			</div>

			<div className='*:not-first:mt-2'>
				<Label htmlFor={`${id}-password`}>Password</Label>
				<Input
					id={`${id}-password`}
					name='password'
					type='password'
					defaultValue={state.values?.password || ''}
					placeholder='Enter your password'
					required
					aria-invalid={!!state.errors?.password}
					disabled={isPending}
				/>
				<FieldError message={state.errors?.password?.[0]} />
			</div>

			<Button type='submit' disabled={isPending} className='w-full'>
				{isPending ? 'Logging in...' : 'Login'}
			</Button>
		</form>
	);
}
